from django.shortcuts import HttpResponse



def homepage(request):
    return HttpResponse('<h1>Welcom to Zuri Chat Company Holiday Calendar</h1>')