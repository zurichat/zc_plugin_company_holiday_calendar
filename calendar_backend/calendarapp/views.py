from django.shortcuts import HttpResponse
from rest_framework import serializers
from rest_framework.viewsets import ModelViewSet
from calendarapp.serializers import EventSerializer
from calendarapp.models import Event


def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")


class EventViewsets(ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer