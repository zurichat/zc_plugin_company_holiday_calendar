from django.contrib.staticfiles.urls import urlpatterns
from django.urls import path
from .views import *



urlpatterns = [
    path('', calendar_view, name="calendar_view")
]