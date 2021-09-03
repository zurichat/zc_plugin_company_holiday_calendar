from calendarapp.models import Event
from rest_framework import serializers, viewsets
from calendarapp.serializers import EventSerializer


class EventViewsets(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer