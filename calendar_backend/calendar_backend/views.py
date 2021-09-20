from django.http.response import HttpResponse
from django.shortcuts import render


def homepage(request):
    return render(request, "zuri-zuri-plugin-holiday-calendar.js")
