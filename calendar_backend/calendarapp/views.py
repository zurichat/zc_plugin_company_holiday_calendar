from django.shortcuts import render
from django.shortcuts import HttpResponse
from rest_framework import generics
from .models import Event

# Create your views here.


def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")


class CreateEventView(generics.CreateAPIView):
    queryset = Event.objects.all()
    