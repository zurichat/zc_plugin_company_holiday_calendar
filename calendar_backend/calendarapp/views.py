from django.shortcuts import HttpResponse, render
from django.http import JsonResponse
from rest_framework import generics, filters, permissions
from rest_framework.generics import DestroyAPIView
from rest_framework.response import Response

from .serializers import *
from .models import *



def calendar_view(request):
    return HttpResponse("<h1>This is where all calender activities are performed and displayed</h1>")

# creating a  view for  displaying  the plugin information as a static Json object.

def plugin_info_view(request):
    plugin_information = [
        {'plug_name': 'holiday calendar',
         'type': 'Calendar',
         'version':'v1',
         'developer_name': 'HNG-8.0/Team-plugin-holiday-calendar',
         'plugin_structure': 'Monolith',
         'description':'Company Holiday Calendar Plugin is a plugin  that enables  calendar functions mainly to organize or schedule holidays or events for a company or a team',
         'template_url': "http://calendar.zuri.chat/",
         'information_url':'http://calendar.zuri.chat/api/v1/info/',
         'sidebar_url': 'http://calendar.zuri.chat/api/v1/sidebar',
         'install_url': 'http://calendar.zuri.chat/install',
         'ping_url': 'http://calendar.zuri.chat/ping',
         'icon_url': 'https://drive.google.com/file/d/15iq9nWBdEOsiB2rnU17GtiTSxlAK2oyj/view?usp=sharing',
         'photos_list':'',
        }   
    ]

    return JsonResponse({'plugin_information': plugin_information})


# creating a  view for  displaying  the plugin side bar as a static Json object.

def side_bar_view(request):
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
    server = [
        {'status': 'Success',
         'Report': ['This server is working']}
    ]
    return JsonResponse({'server': server})


class DeleteEventView(DestroyAPIView):
    model = Event
    queryset = Event.objects.all()

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        payload = {"message": "Deleted event successfully"}
        return Response(payload)


class EventListView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny,]


class EventDetailView(generics.RetrieveAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny,]


class EventUpdateView(generics.UpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny,]



class EventSearch(generics.ListAPIView):
    search_fields = ['event_name', 'end']
    filter_backends = (filters.SearchFilter,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny,]
    

class ReminderListView(generics.ListAPIView):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
    permission_classes = [permissions.AllowAny,]


class ReminderDetailView(generics.RetrieveAPIView):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
    permission_classes = [permissions.AllowAny,]


class CreateEventView(generics.CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny,]


class CreateReminder(generics.CreateAPIView):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
    permission_classes = [permissions.AllowAny,]


class ReminderUpdateView(generics.UpdateAPIView):
    serializer_class = ReminderSerializer
    permission_classes = [permissions.AllowAny,]

    def get_queryset(self):
        queryset = Reminder.objects.filter(id=self.kwargs['pk'])
        return queryset


class DeleteReminderView(DestroyAPIView):
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
