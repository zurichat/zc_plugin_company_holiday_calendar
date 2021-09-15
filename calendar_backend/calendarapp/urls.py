from django.contrib.staticfiles.urls import urlpatterns
from django.urls import path
from .views import *


urlpatterns = [
    path('', calendar_view, name="calendar_view"),
    path('create-event/', CreateEventView.as_view(), name='create_event'),
    path('event-list/', event_list, name="event_lists"),
    path('sidebar/', side_bar_view, name="side_bar"),
    path('info/', plugin_info_view, name="plugin_info"),
    path('ping/', ping_view, name="ping"),
]
