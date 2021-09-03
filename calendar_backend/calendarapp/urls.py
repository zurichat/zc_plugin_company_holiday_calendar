from django.contrib.staticfiles.urls import urlpatterns
from django.urls import path
from .views import *



urlpatterns = [
    path('', calendar_view, name="calendar_view"),
    path('create_event/', CreateEventView.as_view()),
]