from django.http import JsonResponse
from django.shortcuts import HttpResponse
from django.views.generic import DeleteView
from rest_framework import generics
from rest_framework import filters
# from .serializers import EventSerializer
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



class DeleteEventView(DeleteView):
    model = Event

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        payload = {"message": "Deleted event successfully"}
        return JsonResponse(payload)


class EventUpdateView(generics.UpdateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventSearch(generics.ListAPIView):
    search_fields = ['event_name','start_date']
    filter_backends = (filters.SearchFilter,)
    queryset = Event.objects.all()
    serializer_class = EventSerializer #Eventserializer needed!

