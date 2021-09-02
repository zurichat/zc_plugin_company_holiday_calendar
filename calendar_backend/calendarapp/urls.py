from django.urls import path
from rest_framework import routers
from .views import calendar_view, EventViewsets


router = routers.DefaultRouter()

router.register(r'v2', EventViewsets, basename='events')


urlpatterns = router.urls

urlpatterns = [
    path('', calendar_view, name="calendar_view"),
] 

urlpatterns += router.urls