from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from .views import homepage
from calendarapp.views import *
from .views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('', homepage, name="home_page"),
    #path('api/', include('api.urls')),
    path('zuricalendar/', include('calendarapp.urls')),
    path('sidebar', side_bar_view, name="side_bar"),
    path('info', plugin_info_view, name="plugin_info"),
    path('ping', ping_view, name="ping"),

]



urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
