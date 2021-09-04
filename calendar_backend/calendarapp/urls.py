from django.contrib.staticfiles.urls import urlpatterns
from django.urls import path
from .views import *

from db_manager.views import EventCreateDBView

urlpatterns = [
    path('', calendar_view, name="calendar_view"),
    # path('create_event/', CreateEventView.as_view()),
    path('update-event/<int:pk>/', EventUpdateView.as_view()),
    path('search/', EventSearch.as_view(), name="EventSearch"),
    path('reminders/', ReminderListView.as_view(), name='reminders'),
    path('detail-reminder/<int:pk>/', ReminderDetailView.as_view(), name='reminder-details'),
    path('create-reminder/', CreateReminder.as_view(), name='createReminders'),
    path("create_event_db/", EventCreateDBView.as_view(), name='api_create_event'),
] 
