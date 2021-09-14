from django.shortcuts import HttpResponse, render
from django.http import JsonResponse
from rest_framework import generics, filters, permissions
from rest_framework.generics import DestroyAPIView
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from .serializers import *
from .models import *



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


# Delete events by id
class DeleteEventView(DestroyAPIView):
    """
    delete: Delete event by ID
    """
    model = Event
    queryset = Event.objects.all()

    
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        payload = {"message": "Deleted event successfully"}
        return Response(payload)


class EventListView(generics.ListAPIView):
    """
    get: a list of all Events
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny,]


class EventDetailView(generics.RetrieveAPIView):
    """
    get: Details of individual events by ID
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny,]


class EventUpdateView(generics.UpdateAPIView):
    """
    patch:
    Update Specific fields of individual events by ID without affecting others

    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny,]



class EventSearch(generics.ListAPIView):
    """
    post:
    Search or filter event by event name and start time
    
    """
    search_fields = ['event_name', 'end']
    filter_backends = (filters.SearchFilter,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny,]
    

class ReminderListView(generics.ListAPIView):
    """
    get: a List of all Reminders
    """
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
    permission_classes = [permissions.AllowAny,]


class ReminderDetailView(generics.RetrieveAPIView):
    """
    get: Get Reminder details by ID
    """
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
    permission_classes = [permissions.AllowAny,]


class CreateEventView(generics.CreateAPIView):
    """
    post:Create an event
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny,]


class CreateReminder(generics.CreateAPIView):
    """
    post:Create new reminders
    """
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
    permission_classes = [permissions.AllowAny,]


class ReminderUpdateView(generics.UpdateAPIView):
    """
    patch:
    Update specific fields of individual reminder by ID without affecting others
    """
    serializer_class = ReminderSerializer
    permission_classes = [permissions.AllowAny,]

    def get_queryset(self):
        queryset = Reminder.objects.filter(id=self.kwargs['pk'])
        return queryset


class DeleteReminderView(DestroyAPIView):
    """
    delete: Delete individual Reminders by ID
    """
    serializer_class = ReminderSerializer

    def get_queryset(self):
        queryset = Reminder.objects.filter(id=self.kwargs['pk'])
        return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        print(instance)
        instance_id = instance.id
        self.perform_destroy(instance)
        payload = {"message": "Reminder({}) deleted successfully".format(instance_id)}

        return Response(payload)
