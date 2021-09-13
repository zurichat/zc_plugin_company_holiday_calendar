from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from .views import homepage
from calendarapp.views import *
from .views import *
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

# Swagger documentation setup
schema_view = get_schema_view(
    openapi.Info(
        title="Calendars Zuri Chat Plugin API",
        default_version='v1',
        description="Schedule and manage events",
        terms_of_service="https://calendar.zuri.chat/api/v1/info",
        contact=openapi.Contact(email="help@calendars.zuri"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('swagger/', schema_view.with_ui('swagger'), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc'), name='schema-redoc'),
    path('api/v1/', include('calendarapp.urls')),
    path('', homepage, name="home_page"),
]


urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
