from django.http.response import HttpResponse
from django.shortcuts import render


def homepage(request):
    return render(request, "index.html")
