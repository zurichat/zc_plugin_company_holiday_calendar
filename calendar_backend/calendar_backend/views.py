<<<<<<< HEAD
from django.shortcuts import render
=======
from django.shortcuts import HttpResponse, render
>>>>>>> 85a55d09b807de2e410908d3965f1cda8ae9da86



def homepage(request):
    return render(request, "index.html")