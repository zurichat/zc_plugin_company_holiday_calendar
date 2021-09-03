from django.shortcuts import render
from django.shortcuts import HttpResponse
from rest_framework import generics
from rest_framework import filters
<<<<<<< HEAD
=======
from .serializers import EventSerializer
>>>>>>> 74ff07ba55896e35c2a9f7f7f351daee3cabdd45
from . models import *
from rest_framework import generics
<<<<<<< HEAD
from .serializers import EventSerializer
=======
from .models import Event, Reminder
from .serializers import EventSerializer, ReminderSerializer
>>>>>>> 74ff07ba55896e35c2a9f7f7f351daee3cabdd45



def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")


class EventUpdateView(generics.UpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventSearch(generics.ListAPIView):
    search_fields = ['event_name','start_date']
    filter_backends = (filters.SearchFilter,)
    queryset = Event.objects.all()
<<<<<<< HEAD
    serializer_class = EventSerializer #Eventserializer needed!
=======
    serializer_class = EventSerializer #Eventserializer needed!

class ReminderListView(generics.ListCreateAPIView):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer


>>>>>>> 74ff07ba55896e35c2a9f7f7f351daee3cabdd45
