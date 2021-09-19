from django.contrib.staticfiles.urls import urlpatterns
from django.urls import path
from .views import *


urlpatterns = [
    path('', calendar_view, name="calendar_view"),
    path('update-event/<str:pk>/', update_event_view),
    path('create-event/', CreateEventView.as_view(), name='create_event'),
    path('create-reminder/', CreateReminderView.as_view(), name='create-reminder'),
    path('event-list/', event_list, name="event_lists"),
    path('event-detail/<str:id>/', event_detail_view),
    path('event-delete/<str:id>/', event_delete_view),
    path('delete-reminder/<str:id>/', delete_reminder, name='delete-reminder'),
    path('sidebar/', side_bar_view, name="side_bar"),
    path('info/', plugin_info_view, name="plugin_info"),
    path('ping/', ping_view, name="ping"),
]
