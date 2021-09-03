from django.http import JsonResponse
from django.shortcuts import HttpResponse
from rest_framework import generics
from rest_framework import filters
from rest_framework.views import APIView

from .serializers import EventSerializer
from rest_framework.permissions import IsAuthenticated

from . models import *

# update event view imports
from rest_framework import generics
from .models import Event
from .serializers import EventSerializer

from .models import Event
# Create your views here.

# Create your views here.

def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")


class DeleteEventView(APIView):
    queryset = Event.objects.all()

    def get(self, request, pk):
        instance = Event.objects.get(pk=pk)
        if request.user.is_authenticated:
            instance.delete()
            payload = {"message": "Deleted event successfully"}
            return JsonResponse(payload)
        else:
            payload = {"message": "Unauthorized"}
            return JsonResponse(payload)


class EventUpdateView(generics.UpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventSearch(generics.ListAPIView):
    search_fields = ['event_name','start_date']
    filter_backends = (filters.SearchFilter,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer #Eventserializer needed!

