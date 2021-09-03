from django.shortcuts import HttpResponse
<<<<<<< HEAD
from rest_framework import serializers
from rest_framework.viewsets import ModelViewSet
from calendarapp.serializers import EventSerializer
from calendarapp.models import Event
=======
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

>>>>>>> d43110e8f8683454fb53ae99ae965aa0d47bb6be


def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")


<<<<<<< HEAD
class EventViewsets(ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
=======
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
>>>>>>> d43110e8f8683454fb53ae99ae965aa0d47bb6be
