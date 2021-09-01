from django.shortcuts import HttpResponse
# from rest_framework import generics
# from calendarapp.serializers import EventSerializer
# from calendarapp.models import Event

# Create your views here.


def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")
    

# class EventCrudViewset(generics.ListCreateAPIView):
#     queryset = Event.objects.all()
#     serializer_class = EventSerializer
    

