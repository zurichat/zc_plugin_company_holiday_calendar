from django.shortcuts import render
from django.shortcuts import HttpResponse
from .serializers import ReminderSerializer
from rest_framework import generics
from . models import Reminder,Event

# Create your views here.


def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")

class ReminderListView(generics.ListCreateAPIView):
    queryset = Reminder.objects.all()
    serializer_class = ReminderSerializer

    # def list(self, request):
    #     # Note the use of `get_queryset()` instead of `self.queryset`
    #     queryset = self.get_queryset()
    #     serializer = ReminderSerializer(queryset, many=True)
    #     return Response(serializer.data)