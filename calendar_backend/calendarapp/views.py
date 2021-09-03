from django.shortcuts import render
from django.shortcuts import HttpResponse
from rest_framework import generics
from rest_framework import filters
#from .serializers import EventSerializer
from . models import *
from rest_framework import status
from rest_framework.response import Response
from .models import Reminder
from .serializers import ReminderSerializer

# update event view imports
from rest_framework import generics
from .models import Event
from .serializers import EventSerializer

# Create your views here.

# Create your views here.

def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")


class EventUpdateView(generics.UpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventSearch(generics.ListAPIView):
    search_fields = ['event_name','start_date']
    filter_backends = (filters.SearchFilter,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer #Eventserializer needed!

class ReminderViews(generics.CreateAPIView):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer
