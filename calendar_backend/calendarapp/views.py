from django.shortcuts import render
from django.shortcuts import HttpResponse
from django.views.generic import DeleteView

from .models import Event
# Create your views here.


def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")


class DeleteEventView(DeleteView):
    model = Event
    success_url = "/"
