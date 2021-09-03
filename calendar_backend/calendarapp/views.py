from django.http import JsonResponse
from django.shortcuts import HttpResponse
from django.views.generic import DeleteView
from rest_framework.generics import DestroyAPIView
from rest_framework.response import Response

from .models import Event
# Create your views here.
from rest_framework import generics
from rest_framework import filters

from . models import *

from .models import Event, Reminder
from .serializers import EventSerializer, ReminderSerializer

def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")


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


class EventSearch(generics.ListAPIView):
    search_fields = ['event_name','start_date']
    filter_backends = (filters.SearchFilter,)
    queryset = Event.objects.all()

    serializer_class = EventSerializer #Eventserializer needed!

class ReminderListView(generics.ListCreateAPIView):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer

