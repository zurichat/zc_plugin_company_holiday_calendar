from rest_framework import routers
from .views import EventViewsets

router = routers.DefaultRouter()

router.register(r'v1', EventViewsets, basename='events')


urlpatterns = router.urls