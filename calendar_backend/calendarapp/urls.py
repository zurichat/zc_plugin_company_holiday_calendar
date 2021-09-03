from django.urls import path
from rest_framework import routers
from .views import calendar_view, EventUpdateView, EventSearch, EventViewsets
from . import views


router = routers.DefaultRouter()

router.register(r'v2', EventViewsets, basename='events')

urlpatterns = [
    path('', calendar_view, name="calendar_view"),
    path('update-event/<int:pk>', EventUpdateView.as_view()),
    path('search/', EventSearch.as_view(), name="EventSearch"),
    path('reminders/', ReminderListView.as_view(), name='reminders'),
    path('create-reminder/', views.CreateReminder.as_view(), name='createReminders'),
] 

urlpatterns += router.urls
