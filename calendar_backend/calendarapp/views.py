# from datastore import DataBase
from django.shortcuts import HttpResponse, render
from django.http import JsonResponse
from rest_framework import generics, status
from rest_framework import response
from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from django.core.files.storage import default_storage
from rest_framework.views import APIView
import requests,json, uuid, re
from requests import exceptions
from .serializers import EventSerializer, UpdateEventSerializer
from drf_yasg.utils import swagger_auto_schema
from .serializers import *
from .datastore import DataBase
from calendar_backend.settings import PLUGIN_ID, ORGANIZATION_ID
from .login import login_user

# new imports (authentication task)
from rest_framework.decorators import permission_classes
from .permissions import UserIsAuthenticated




header={
    'Authorization': f'Bearer {login_user()}'
}

"""
Creating a view for calendar
"""


def calendar_view(request):
    return HttpResponse("<h1>This is where all calender activities are performed and displayed</h1>")


# creating a  view for  displaying  the plugin information as a static Json object.


def plugin_info_view(request):
    """
    get:
    Get info about the plugin in JSON format
    """
    plugin_information = [
        {'plug_name': 'holiday calendar',
         'type': 'Calendar',
         'version': 'v1',
         'developer_name': 'HNG-8.0/Team-plugin-holiday-calendar',
         'scaffold_structure': 'Monolith',
         'description': '''Zurichat Company Holiday Calendar helps you and your team to stay organized with a shared calendar.
         From viewing your company monthly events in one screen to receiving up-to-the-minute reminders,
         the company holiday calendar has everything you need to create and manage events''',
         'template_url': "http://calendar.zuri.chat/",
         'information_url': 'http://calendar.zuri.chat/api/v1/info/',
         'sidebar_url': 'http://calendar.zuri.chat/api/v1/sidebar',
         'install_url': 'http://calendar.zuri.chat/install',
         'ping_url': 'http://calendar.zuri.chat/ping',
         'icon_url': 'https://drive.google.com/file/d/15iq9nWBdEOsiB2rnU17GtiTSxlAK2oyj/view?usp=sharing',
         'photos_list': ''
         }
    ]

    return JsonResponse({'plugin_information': plugin_information})


def verify_user(token):
    """
    Call Endpoint for verification of user
    """
    url = "https://api.zuri.chat/auth/verify-token"

    headers = {}
    if "...." in token:
        headers["Authorization"] = f"Bearer {token}"
    else:
        headers["Cookie"] = token

    res = requests.get(url, headers=headers)
    resp = res.json()

    return resp


# creating a  view for  displaying  the plugin side bar as a static Json object.

def side_bar_view(request):
    """
    get:
    JSON Response showing the sidebar items for our plugin and their image urls
    """
    side_bars = [
        {'plugin': 'plugin for Zuri Chat that enables  calender functions',
         'status': 'Success',
         'type': 'Plugin sidebar',
         'url': "https://calendar.zuri.chat",
         }
    ]

    return JsonResponse({'side_bars': side_bars})


# creating a  view for  displaying  a report on the functionality of the server as a static Json object.

def ping_view(request):
    """
    get:
    JSON response confirming server is up and running
    """
    server = [
        {'status': 'Success',
         'Report': ['This server is working']}
    ]
    return JsonResponse({'server': server})


@api_view(['PUT', 'PATCH'])
# @permission_classes((UserIsAuthenticated, ))
def update_event_view(request, pk):
    """
    patch:
    Update Specific fields of individual events by ID without affecting others
    """

    serializer = UpdateEventSerializer(data=request.data)
    url = 'https://api.zuri.chat/data/write'

    try:
        if serializer.is_valid(raise_exception=True):
            event_payload = {
                "plugin_id": PLUGIN_ID,
                "organization_id": ORGANIZATION_ID,
                "collection_name": "events",
                "bulk_write": False,
                "object_id": pk,
                "filter": {},
                "payload": serializer.data
            }
            response = requests.put(url=url, json=event_payload)

            if response.status_code != 200:
                return Response({'success': False, 'errors': response.json()['message']},
                                status=status.HTTP_400_BAD_REQUEST)
            return Response({'success': True, 'response': response.json()}, status=status.HTTP_200_OK)
    except exceptions.ConnectionError as e:
        return Response({'success': False, 'errors': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CreateEventView(generics.CreateAPIView):
    """
    This is  a create view for creating an event . The method allowed  is POST
    """
    parser_classes=(MultiPartParser, FormParser)
    serializer_class = EventSerializer

    # permission_classes -= [UserIsAuthenticated]

    def post(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        if request.FILES:
            file = request.FILES["file"]
            files = {
                "file" : file,

            }
            file_response = requests.post(url="https://api.zuri.chat/upload/files/{plugin_id}", files=files, headers= header)
            files_urls =[]
            data = file_response.json()["data"]["files_info"]
            for url_link in data:
                files_urls.append(url_link["file_url"])



        # posting data to zuri core after validation
        # the organization_id would be dynamic; based on the request data
        event = serializer.data
        if request.FILES:
            event["images"]= files_urls[0]
        

        plugin_id = PLUGIN_ID
        org_id = ORGANIZATION_ID
        coll_name = "events"
        event_payload = {
            "plugin_id": plugin_id,
            "organization_id": org_id,
            "collection_name": coll_name,
            "bulk_write": False,
            "object_id": "",
            "filter": {},
            "payload": event
        }
        url = "https://api.zuri.chat/data/write"

        try:
            response = requests.post(url=url, json=event_payload)

            if response.status_code == 201:
                return Response({"message": "event created successfully" }, status=status.HTTP_201_CREATED)
            else:
                return Response({"error": response.json()['message']}, status=response.status_code)
                print()
        except exceptions.ConnectionError as e:
            return Response(str(e), status=status.HTTP_502_BAD_GATEWAY)











# Fetch list of events from zuri core


@api_view(['GET'])
# @permission_classes((UserIsAuthenticated, ))
def event_list(request):
    plugin_id = PLUGIN_ID
    org_id = ORGANIZATION_ID
    coll_name = "events"

    if request.method == "GET":

        # getting data from zuri core
        # api.zuri.chat/data/read/{plugin_id}/{collection_name}/{organization_id}
        url = f"https://api.zuri.chat/data/read/{plugin_id}/{coll_name}/{org_id}/"
        try:
            response = requests.get(url=url)
            if response.status_code == 200:
                events_list = response.json()
                return Response(events_list, status=status.HTTP_200_OK)
            else:
                return Response({"error": response.json()["message"]}, status=response.status_code)
        except exceptions.ConnectionError as e:
            return Response(str(e), status=status.HTTP_502_BAD_GATEWAY)

@api_view(['GET'])
#@permission_classes((UserIsAuthenticated, ))
def event_filter(request, pk):
    """
    Filter events to be displayed by month and year so that each calendar view can display only the events for that month.
    pk is the Year-month variable e.g. 2021-04 for April 2021. Events displayed include events that start or end in that month.
    """
    plugin_id = PLUGIN_ID
    org_id = ORGANIZATION_ID
    coll_name = "events"

    if request.method == "GET":

        # getting data from zuri core
        # api.zuri.chat/data/read/{plugin_id}/{collection_name}/{organization_id}
        url = f"https://api.zuri.chat/data/read/{plugin_id}/{coll_name}/{org_id}/"
        try:
            response = requests.get(url=url)
            if response.status_code == 200:
                events_list = response.json()
                filtered_list = []
                for event in events_list["data"]:
                    if 'start_date' in event and (event['start_date'][0:7] == pk or event['end_date'][0:7] == pk):
                        filtered_list.append(event)
                return Response(filtered_list, status=status.HTTP_200_OK)
            else:
                return Response({"error": response.json()["message"]}, status=response.status_code)
        except exceptions.ConnectionError as e:
            return Response(str(e), status=status.HTTP_502_BAD_GATEWAY)


# test data
# {
#     "event_title": "Team lead test",
#     "start_date": "2021-09-17",
#     "end_date": "2021-09-18",
#     "start_time": "20:47:00",
#     "end_time": "20:47:00",
#     "time_zone": "Africa/Ceuta",
#     "description": "writing data to zuri core",
#     "all_day": "True",
#     "event_tag": "Writing data",
#     "event_colour": "0"
# }


@api_view(['GET'])
# @permission_classes((UserIsAuthenticated, ))
def event_detail_view(request, id):
    '''
    event detail view with a list of event-specific reminder(s) previously
    set by a particular user.
    '''
    plugin_id = PLUGIN_ID
    organization_id = ORGANIZATION_ID
    coll_name = "events"

    if request.method == 'GET':
        url_event = f'https://api.zuri.chat/data/read/{plugin_id}/{coll_name}/{organization_id}?_id={id}'

        try:
            response_event = requests.get(url=url_event)

            if response_event.status_code == 200:
                event_data = response_event.json()['data']

                # to retrieve reminder(s) for this particular event
                # that belongs to the current user.

                user_id = request.query_params.get('user')
                url_reminder = f'https://api.zuri.chat/data/read/{plugin_id}/reminders/{organization_id}?event_id={id}&user_id={user_id}'

                try:
                    response_reminder = requests.get(url=url_reminder)

                    if response_reminder.status_code == 200:
                        reminder_data = response_reminder.json()['data']
                    else:
                        reminder_data = f"{response_reminder.status_code} Error: {response_reminder.json()['message']}"

                except exceptions.ConnectionError as e:
                    reminder_data = f"502 Error: {e}"

                # adding the user-specific event reminder(s) to the event.
                event_data['reminders'] = reminder_data

                return Response(event_data, status=status.HTTP_200_OK)
            else:
                return Response({'error': response_event.json()['message']}, status=response_event.status_code)

        except exceptions.ConnectionError as e:
            return Response(str(e), status=status.HTTP_502_BAD_GATEWAY)


"""
This is a destroy view for deleting events.
"""


@api_view(['DELETE'])
# @permission_classes((UserIsAuthenticated, ))
def event_delete_view(request, id):
    plugin_id = PLUGIN_ID
    organization_id = ORGANIZATION_ID
    coll_name = "events"
    if request.method == "DELETE":
        url = "https://api.zuri.chat/data/delete"
        payload = {
            "plugin_id": plugin_id,
            "organization_id": organization_id,
            "collection_name": coll_name,
            "bulk_delete": False,
            "object_id": id,
            "filter": {},
        }

        try:
            response = requests.post(url=url, json=payload)

            if response.status_code == 200:
                return Response({"message": "event successfully deleted"}, status=status.HTTP_200_OK)
            else:
                return Response({"error": response.json()["message"]}, status=response.status_code)

        except exceptions.ConnectionError as e:
            return Response(str(e), status=status.HTTP_502_BAD_GATEWAY)


class CreateReminderView(generics.GenericAPIView):
    serializer_class = ReminderSerializer

    # permission_classes = [UserIsAuthenticated]

    def post(self, request):
        event_id = request.query_params.get('_id')
        user_id = request.query_params.get('user')

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        # posting data to zuri core after validation
        plugin_id = PLUGIN_ID
        org_id = ORGANIZATION_ID
        coll_name = "reminders"

        reminder = serializer.data
        reminder['event_id'] = event_id
        reminder['user_id'] = user_id

        reminder_payload = {
            "plugin_id": plugin_id,
            "organization_id": org_id,
            "collection_name": coll_name,
            "bulk_write": False,
            "object_id": "",
            "filter": {},
            "payload": reminder
        }
        url = 'https://api.zuri.chat/data/write'

        try:
            response = requests.post(url=url, json=reminder_payload)

            if response.status_code == 201:
                return Response(reminder, status=status.HTTP_201_CREATED)
            else:
                return Response({"error": response.json()['message']}, status=response.status_code)

        except exceptions.ConnectionError as e:
            return Response(str(e), status=status.HTTP_502_BAD_GATEWAY)


"""
This is a standalone Reminder ListView
"""


@api_view(['GET'])
# @permission_classes((UserIsAuthenticated, ))
def reminder_list(request):
    plugin_id = PLUGIN_ID
    organization_id = ORGANIZATION_ID
    collection_name = "reminders"

    if request.method == "GET":
        # getting data from zuri core
        url = f"https://api.zuri.chat/data/read/{plugin_id}/{collection_name}/{organization_id}/"

        try:
            response = requests.get(url=url)
            if response.status_code == 200:
                reminders_list = response.json()['data']
                return Response(reminders_list, status=status.HTTP_200_OK)
            else:
                return Response({"error": response.json()["message"]}, status=response.status_code)
        except exceptions.ConnectionError as e:
            return Response(str(e), status=status.HTTP_502_BAD_GATEWAY)


@api_view(['DELETE'])
# @permission_classes((UserIsAuthenticated, ))
def delete_reminder(request, id):
    plugin_id = PLUGIN_ID
    org_id = ORGANIZATION_ID
    coll_name = "reminders"
    if request.method == 'DELETE':
        url = 'https://api.zuri.chat/data/delete'

        payload = {
            "plugin_id": plugin_id,
            "organization_id": org_id,
            "collection_name": coll_name,
            "bulk_delete": False,
            "object_id": id,
            "filter": {}
        }
    try:
        response = requests.post(url=url, json=payload)

        if response.status_code == 200:
            return Response({"message": "reminder successfully deleted"},
                            status=status.HTTP_200_OK)
        else:
            return Response({"error": response.json()['message']}, status=response.status_code)

    except exceptions.ConnectionError as e:
        return Response(str(e), status=status.HTTP_502_BAD_GATEWAY)


class ReminderUpdateView(generics.UpdateAPIView):
    serializer_class = ReminderSerializer
    database = DataBase()
    coll_name = "reminders"

    # permission_classes = [UserIsAuthenticated]

    def update(self, request, *args, **kwargs):
        object_id = self.kwargs['pk']

        instance = self.database.get(self.coll_name, {"_id": object_id})
        if instance.get("error"):
            return instance
        #
        # instance = None
        # if response.get('_id') == object_id:
        #     instance = response
        # print(instance)
        # if not instance:
        #     return

        object_id = instance.pop('_id')
        partial = kwargs.pop('partial', False)

        serializer = self.get_serializer(data=request.data, instance=instance, partial=partial)

        if serializer.is_valid():
            serializer.save()

        event_update = serializer.data

        response = self.database.put(self.coll_name, event_update, object_id=object_id)
        print(response)
        return Response(data=response)


@api_view(['GET'])
def reminder_detail(request, id):
    response = {"status": True, "message": f"You have reached the API endpoint to retrieve the reminder with id : {id}"}

    return Response(response, status=status.HTTP_200_OK)


class CreateCustomReminderView(generics.GenericAPIView):
    serializer_class = CustomReminderSerializer

    def post(self, request):
        event_id = request.query_params.get('_id')
        user_id = request.query_params.get('user')

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):
            """
              Posting data to zuri core after validation
               """

        customReminder = serializer.data
        customReminder['event_id'] = event_id
        customReminder['user_id'] = user_id
        data = customReminder
        plugin_id = PLUGIN_ID
        org_id = ORGANIZATION_ID
        coll_name = "custom"
        body = {
            "plugin_id": plugin_id,
            "organization_id": org_id,
            "collection_name": coll_name,
            "bulk_write": False,
            "object_id": "",
            "filter": {},
            "payload": data
        }
        url = "https://api.zuri.chat/data/write"

        try:
            response = requests.post(url=url, json=body)

            if response.status_code == 201:
                return Response({"message": "done!"}, status=status.HTTP_201_CREATED)
            else:
                return Response({"error": response.json()['message']}, status=response.status_code)
                print()
        except exceptions.ConnectionError as x:
            return Response(str(x), status=status.HTTP_502_BAD_GATEWAY)


@api_view(['GET'])
def CustomReminderList(request):
    plugin_id = PLUGIN_ID
    organization_id = ORGANIZATION_ID
    collection_name = "custom"

    if request.method == "GET":
        # getting data from zuri core
        url = f"https://api.zuri.chat/data/read/{plugin_id}/{collection_name}/{organization_id}/"

        try:
            response = requests.get(url=url)
            if response.status_code == 200:
                custom_list = response.json()['data']
                return Response(custom_list, status=status.HTTP_200_OK)
            else:
                return Response({"error": response.json()["message"]}, status=response.status_code)
        except exceptions.ConnectionError as x:
            return Response(str(x), status=status.HTTP_502_BAD_GATEWAY)


@api_view(['DELETE'])
def DeleteCustomReminder(id):
    plugin_id = PLUGIN_ID
    org_id = ORGANIZATION_ID
    coll_name = "custom"

    url = "https://api.zuri.chat/data/delete"
    body = {
        "plugin_id": plugin_id,
        "organization_id": org_id,
        "collection_name": "custom",
        "object_id": id
    }
    response = requests.request("POST", url, data=json.dumps(body))
    r = response.json()
    if response.status_code == 200:
        if r["data"]["deleted_count"] == 0:
            return Response(data={'message': 'There is no rmi with this object id you supplied'},
                            status=status.HTTP_400_BAD_REQUEST)
        return Response(data={'message': 'successful'}, status=status.HTTP_200_OK)
    return Response(data={"message": "Try again later"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
