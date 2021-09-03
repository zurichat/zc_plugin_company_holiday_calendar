<<<<<<< HEAD
from calendarapp.models import Event, Reminder
=======
from calendarapp.models import Event,Reminder
>>>>>>> 46ae85551e73252a7f0d6964819cd51d8075aff5
from django.contrib import admin
from .models import Event, Reminder


<<<<<<< HEAD

=======
# Register your models here.
from .models import Event, Reminder
>>>>>>> 46ae85551e73252a7f0d6964819cd51d8075aff5

admin.site.register(Event)
admin.site.register(Reminder)

