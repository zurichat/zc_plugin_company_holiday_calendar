from django.urls import path
<<<<<<< HEAD
from rest_framework import routers
from .views import calendar_view, EventViewsets
=======
from .views import calendar_view, EventUpdateView, EventSearch
>>>>>>> d43110e8f8683454fb53ae99ae965aa0d47bb6be


router = routers.DefaultRouter()

router.register(r'v2', EventViewsets, basename='events')


urlpatterns = router.urls

urlpatterns = [
    path('', calendar_view, name="calendar_view"),
<<<<<<< HEAD
] 

urlpatterns += router.urls
=======
    path('update-event/<int:pk>', EventUpdateView.as_view()),
    path('search/', EventSearch.as_view(), name="EventSearch"),
    path('reminders/', ReminderListView.as_view(), name='reminders')
]
>>>>>>> d43110e8f8683454fb53ae99ae965aa0d47bb6be
