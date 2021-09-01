from django.shortcuts import render
from django.shortcuts import HttpResponse

# imports for EventUpdateView
from rest_framework.generics import UpdateAPIView
from .models import Event
from .serializers import EventSerializer

# Create your views here.


def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")


class EventUpdateView(UpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer