from django.shortcuts import render
from django.shortcuts import HttpResponse
from rest_framework import generics
from rest_framework import filters
# from .serializers import EventSerializer
from . models import *


# Create your views here.

def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")


class EventSearch(generics.ListAPIView):
    search_fields = ['event_name','start_date']
    filter_backends = (filters.SearchFilter,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer #Eventserializer needed!