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


"""
This is  a create view for creating an event . The method allowed  is POST 
"""


class CreateEventView(generics.CreateAPIView):
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
        url = "https://api.zuri.chat/data/read/{plugin_id}/{coll_name}/{ord_id}"
        try:
            response = requests.get(url=url)
            if response.status_code == 201:
                events_list = response.json(['data'])
                return JsonResponse(events_list, status=status.HTTP_200_OK)
            else:
                return Response({"error": response.json()["message"]}, status=response.status_code)
        except exceptions.ConnectionError as e:
            return Response(str(e), status=status.HTTP_502_BAD_GATEWAY)


# test data
{
    "event_title": "Team lead test",
    "start_date": "2021-09-17",
    "end_date": "2021-09-18",
    "start_time": "20:47:00",
    "end_time": "20:47:00",
    "time_zone": "Africa/Ceuta",
    "description": "writing data to zuri core",
    "all_day": "True",
    "event_tag": "Writing data",
    "event_colour": "0"
}
