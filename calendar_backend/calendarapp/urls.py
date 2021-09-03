from django.contrib.staticfiles.urls import urlpatterns
from django.urls import path
from rest_framework import routers
from .views import *
from . import views


urlpatterns = [
    path('', calendar_view, name="calendar_view"),
<<<<<<< HEAD
    path('create_event/', CreateEventView.as_view()),
]
=======
    path('update-event/<int:pk>', EventUpdateView.as_view()),
    path('search/', EventSearch.as_view(), name="EventSearch"),
    path('reminders/', ReminderListView.as_view(), name='reminders'),
    path('detail-reminder/<int:pk>', ReminderDetailView.as_view(), name='reminder-details'),
    path('create-reminder/', views.CreateReminder.as_view(), name='createReminders'),
] 

>>>>>>> dbf559a70a93019f9bbc4825f6ba0bb7f25c7031
