from django.shortcuts import HttpResponse, render
from django.http import JsonResponse
from rest_framework import generics, filters, permissions
from rest_framework.generics import DestroyAPIView
from rest_framework.response import Response

from .serializers import *
from .models import *



def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")

# creating a  view for  displaying  the plugin information as a static Json object.

def plugin_info_view(request):
    plugin_information = [
        {'status': 'Success',
         'name': 'Company_Holiday_Calendar Plugin',
         'type': 'Plugin Information',
         'description': [
             'Company Holiday Calender Plugin is a zuri.chat plugin  that enables  calender functions mainly to organize or schedule holidays or events for a company or a team']},

        {'scaffold_structure': 'Monolith',
         'team': 'HNG-8.0/Team-Hemingway',
         'sidebar_url': 'http://calendar.zuri.chat/sidebar',
         'homepage_url': "http://calendar.zuri.chat/",
         'ping_url': 'http://calendar.zuri.chat/ping',
         }
    ]

    return JsonResponse({'plugin_information': plugin_information})


# creating a  view for  displaying  the plugin side bar as a static Json object.

def side_bar_view(request):
    side_bars = [
        {'plugin': 'plugin for Zuri Chat that enables  calender functions',
         'status': 'Success',
         'type': 'Plugin sidebar'}
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
    

class ReminderListView(generics.ListCreateAPIView):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
    permission_classes = [permissions.AllowAny,]


class ReminderDetailView(generics.RetrieveAPIView):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
    permission_classes = [permissions.AllowAny,]


class CreateEventView(generics.CreateAPIView):
    queryset = Event.objects.all()
    serializer_class = ReminderSerializer
    permission_classes = [permissions.AllowAny,]


class CreateReminder(generics.CreateAPIView):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
    permission_classes = [permissions.AllowAny,]
