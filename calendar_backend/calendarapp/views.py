from django.shortcuts import render
from django.shortcuts import HttpResponse

# Create your views here.


def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")
    
