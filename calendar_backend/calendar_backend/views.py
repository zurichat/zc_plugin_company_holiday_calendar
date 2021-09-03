from django.shortcuts import HttpResponse



def homepage(request):
    return HttpResponse('<h1>Welcome to Zuri Chat Company Holiday Calendar: Edited with ci/cd</h1>')