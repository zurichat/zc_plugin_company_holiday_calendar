# from datastore import DataBase
from django.shortcuts import HttpResponse, render
from django.http import JsonResponse
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
from requests import exceptions
from .serializers import EventSerializer
from drf_yasg.utils import swagger_auto_schema
from .serializers import *
from .datastore import DataBase
from calendar_backend.settings import PLUGIN_ID, ORGANIZATION_ID


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


# class DeleteEventView(DestroyAPIView):
#     """
#     delete:
#     Delete event by ID
#     """
#     model = Event
#     queryset = Event.objects.all()

    
#     def destroy(self, request, *args, **kwargs):
#         instance = self.get_object()
#         self.perform_destroy(instance)
#         payload = {"message": "Deleted event successfully"}
#         return Response(payload)


@api_view(['PUT','PATCH'])
def update_event_view(request, pk):
    """
    patch:
    Update Specific fields of individual events by ID without affecting others

    put:
    Update all fields of individual events by ID without affecting others
    """
    serializer = EventSerializer(data=request.data)
    url = f'https://api.zuri.chat/data/read/{PLUGIN_ID}/event/{ORGANIZATION_ID}?_id={pk}'
    
    try:
        if serializer.is_valid(raise_exception=True):
            serialized_data = serializer.data
            response = request.patch(url, data=serialized_data)
            
            if response.status_code != 200:
                return Response({'success':False, 'errors':response.json()['message']}, status=status.HTTP_400_BAD_REQUEST)
            return Response({'success':True, 'response':response.json()}, status=status.HTTP_200_OK)
    except exceptions.ConnectionError as e:
        return Response({'success':False, 'errors':str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# class EventSearch(generics.ListAPIView):
#     """
#     post:
#     Search or filter event by event name and start time
    
#     """
#     search_fields = ['event_name', 'end']
#     filter_backends = (filters.SearchFilter,)
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer
#     permission_classes = [permissions.AllowAny,]
    

# class ReminderListView(generics.ListAPIView):
#     """
#     get: 
#     a List of all Reminders
#     """
#     queryset = Reminder.objects.all()
#     serializer_class = ReminderSerializer
#     permission_classes = [permissions.AllowAny,]


# class ReminderDetailView(generics.RetrieveAPIView):
#     """
#     get: 
#     Get Reminder details by ID
#     """
#     queryset = Reminder.objects.all()
#     serializer_class = ReminderSerializer
#     permission_classes = [permissions.AllowAny,]


class CreateEventView(generics.CreateAPIView):
    """
    This is  a create view for creating an event . The method allowed  is POST 
    """
    serializer_class = EventSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        # posting data to zuri core after validation
        # the organization_id would be dynamic; based on the request data
        event = serializer.data
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
                return Response({"message": "event created successfully"}, status=status.HTTP_201_CREATED)
            else:
                return Response({"error": response.json()['message']}, status=response.status_code)
                print()
        except exceptions.ConnectionError as e:
            return Response(str(e), status=status.HTTP_502_BAD_GATEWAY)


# Fetch list of events from zuri core
@api_view(['GET'])
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


'''
event detail view with a list of event-specific reminder(s) previously 
set by a particular user.
'''
@api_view(['GET'])
def event_detail_view(request, id):
    plugin_id = PLUGIN_ID
    organization_id = ORGANIZATION_ID

    if request.method == 'GET':
        url_event = f'https://api.zuri.chat/data/read/{plugin_id}/event/{organization_id}?_id={id}'
        
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



class CreateReminderView(generics.GenericAPIView):
    serializer_class = ReminderSerializer

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
