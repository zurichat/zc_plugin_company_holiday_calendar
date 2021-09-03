from django.shortcuts import HttpResponse
from rest_framework.viewsets import ModelViewSet

from rest_framework import generics
from rest_framework import filters

from . models import *
from rest_framework import generics
from .models import Event, Reminder
from .serializers import EventSerializer, ReminderSerializer



def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")



class EventViewsets(ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventUpdateView(generics.UpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventSearch(generics.ListAPIView):
    search_fields = ['event_name','start_date']
    filter_backends = (filters.SearchFilter,)
    queryset = Event.objects.all()

    serializer_class = EventSerializer #Eventserializer needed!

    serializer_class = EventSerializer #Eventserializer needed!

class ReminderListView(generics.ListCreateAPIView):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer

