# from datastore import DataBase
from django.shortcuts import HttpResponse, render
from django.http import JsonResponse
from rest_framework import generics, filters, permissions, status
from rest_framework.generics import DestroyAPIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
import requests
from requests import exceptions
from .serializers import EventSerializer
from environs import Env

env = Env()
env.read_env()
from drf_yasg.utils import swagger_auto_schema
from .serializers import *



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
         'version':'v1',
         'developer_name': 'HNG-8.0/Team-plugin-holiday-calendar',
         'scaffold_structure': 'Monolith',
         'description':'''Zurichat Company Holiday Calendar helps you and your team to stay organized with a shared calendar. 
         From viewing your company monthly events in one screen to receiving up-to-the-minute reminders, 
         the company holiday calendar has everything you need to create and manage events''',
         'template_url': "http://calendar.zuri.chat/",
         'information_url':'http://calendar.zuri.chat/api/v1/info/',
         'sidebar_url': 'http://calendar.zuri.chat/api/v1/sidebar',
         'install_url': 'http://calendar.zuri.chat/install',
         'ping_url': 'http://calendar.zuri.chat/ping',
         'icon_url': 'https://drive.google.com/file/d/15iq9nWBdEOsiB2rnU17GtiTSxlAK2oyj/view?usp=sharing',
         'photos_list':''
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
class CreateEventView(generics.GenericAPIView):
    serializer_class = EventSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        # posting data to zuri core after validation
        # the organization_id would be dynamic; based on the request data
        event = serializer.data
        plugin_id =  "6140c878d3f77e5cebc285f7"
        payload = {
            "plugin_id": "6140c878d3f77e5cebc285f7",
            "organization_id": "6133c5a68006324323416896",
            "collection_name": "events",
            "bulk_write": False,
            "object_id": "",
            "filter": {},
            "payload": event
        }
        url = 'https://zccore.herokuapp.com/data/write'

        try:
            response = requests.post(url=url, json=payload)

            if response.status_code == 201:
                return Response(status=status.HTTP_201_CREATED)
            else:
                return Response({"error": response.json()['message']}, status=response.status_code)

        except exceptions.ConnectionError as e:
            return Response(str(e), status=status.HTTP_502_BAD_GATEWAY)
        




@api_view(['GET'])
def event_list_view(request):
    if request.method == "GET":
        # getting data from zuri core
        # /data/read/{plugin_id}/{collection_name}/{organization_id}
        url = 'https://zccore.herokuapp.com//data/read/6140c878d3f77e5cebc285f7/events/6133c5a68006324323416896'

        try:
            response = requests.get(url=url)

            if response.status_code == 200:
                events_data = response.json()['data']
                return Response(events_data, status=status.HTTP_200_OK)
            else:
                return Response({"error": response.json()['message']}, status=response.status_code)

        except exceptions.ConnectionError as e:
            return Response(str(e), status=status.HTTP_502_BAD_GATEWAY)









