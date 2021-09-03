from django.contrib.staticfiles.urls import urlpatterns
from django.urls import path
from .views import calendar_view, EventUpdateView, EventSearch, ReminderListView, DeleteEventView

urlpatterns = [
    path('', calendar_view, name="calendar_view"),
    path('update-event/<int:pk>', EventUpdateView.as_view()),
    path('delete-event/<int:pk>', DeleteEventView.as_view()),
    path('search/', EventSearch.as_view(), name="EventSearch"),
    path('reminders/', ReminderListView.as_view(), name='reminders')
]