from calendarapp.models import Event
from django.contrib import admin


# Register your models here.
from .models import Event, Reminder
admin.site.register(Event)
admin.site.register(Reminder)

