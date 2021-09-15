from django.contrib.staticfiles.urls import urlpatterns
from django.urls import path
from .views import *

from django.urls import path

from .views import CreateEventView, event_list_view



urlpatterns = [
    path('', calendar_view, name="calendar_view"),
    path('create-event/', CreateEventView.as_view(), name='create-event'),
    path('list-events/', event_list_view),
    # path('event-detail/<int:pk>/', EventDetailView.as_view(), name="eventdetail"),
    # path('update-event/<int:pk>/', EventUpdateView.as_view()),
    # path('delete-event/<int:pk>/', DeleteEventView.as_view()),
    # path('search/', EventSearch.as_view(), name="EventSearch"),
    # path('reminders/', ReminderListView.as_view(), name='reminders'),
    # path('detail-reminder/<int:pk>/', ReminderDetailView.as_view(), name='reminder-details'),
    # path('create-reminder/', CreateReminder.as_view(), name='createReminders'),
    # path('update-reminder/<int:pk>/', ReminderUpdateView.as_view()),
    # # path("delete-reminder/<int:pk>/", DeleteReminderView.as_view()),
    path('sidebar/', side_bar_view, name="side_bar"),
    path('info/', plugin_info_view, name="plugin_info"),
    path('ping/', ping_view, name="ping"),
]
