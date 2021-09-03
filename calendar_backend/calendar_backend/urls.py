from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from .views import homepage

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('', homepage, name="home_page"),
<<<<<<< HEAD
    path('zuricalender', include('calendarapp.urls')),
    path('api/', include('api.urls')),
=======
    path('zuricalendar/', include('calendarapp.urls'))
>>>>>>> d43110e8f8683454fb53ae99ae965aa0d47bb6be
]


urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
