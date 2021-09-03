from django.contrib.staticfiles.urls import urlpatterns
from django.urls import path
<<<<<<< HEAD
from .views import *
from . import views
=======
from .views import calendar_view, EventUpdateView, EventSearch
>>>>>>> d43110e8f8683454fb53ae99ae965aa0d47bb6be



urlpatterns = [
    path('', calendar_view, name="calendar_view"),
    path('update-event/<int:pk>', EventUpdateView.as_view()),
    path('search/', EventSearch.as_view(), name="EventSearch"),
    path('reminders/', ReminderListView.as_view(), name='reminders'),
    path('create-reminder/', views.CreateReminder.as_view(), name='createReminders')
]
