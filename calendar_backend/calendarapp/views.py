from django.shortcuts import render
from django.shortcuts import HttpResponse
from rest_framework import generics
from calendarapp.models import Event
from calendarapp.serializers import EventSerializer

# Create your views here.


def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")


class EventListViewAPI(generics.ListAPIView):
    """
    API endpoint that allows Event to be viewed
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    
