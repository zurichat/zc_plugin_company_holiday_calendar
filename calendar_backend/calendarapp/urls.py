from django.contrib.staticfiles.urls import urlpatterns
from django.urls import path
from rest_framework import routers
from .views import *
from . import views


urlpatterns = [
    path('', calendar_view, name="calendar_view"),
    path('update-event/<int:pk>', EventUpdateView.as_view()),
    path('search/', EventSearch.as_view(), name="EventSearch"),
    path('reminders/', ReminderListView.as_view(), name='reminders'),
    path('detail-reminder/<int:pk>', ReminderDetailView.as_view(), name='reminder-details'),
    path('create-reminder/', views.CreateReminder.as_view(), name='createReminders'),
] 

