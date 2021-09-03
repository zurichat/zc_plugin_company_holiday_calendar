# from os import O_NDELAY
from django.db import models
from django.utils import timezone as _timezone
from core.utils import get_timezones, DEFAULT_TIMEZONE



def get_sentinel_event():
    return Event.objects.get_or_create(event_name="deleted", )[0]


# Create an additional method to return only the id - default expects an id and not a Model object
def get_sentinel_event_id():
    return get_sentinel_event().id


class Event(models.Model):
    event_name = models.CharField(max_length=500)
    start_date = models.DateTimeField('Start event date', default=_timezone.now)
    end_date = models.DateTimeField('Stop event date', default=_timezone.now)
    time_zone = models.CharField(max_length=250, choices=get_timezones(), default=DEFAULT_TIMEZONE)
    description = models.CharField(max_length=100000)
    event_tag = models.CharField(max_length=100)
    event_color = models.CharField(max_length=100)
    availability = models.BooleanField(default=True)
    visibility = models.CharField(max_length=100)

    def __str__(self):
        return self.event_name


class Reminder(models.Model):
    reminder_id = models.CharField(max_length=100000)
    event_name = models.ForeignKey(Event, on_delete=models.SET(get_sentinel_event), default=get_sentinel_event_id)
    date = models.DateField(default=_timezone.now)
    time = models.TimeField(default=_timezone.now)
    custom_occurrence = models.CharField(max_length=1000)
    repeat_every = models.IntegerField()
    repeat_on = models.CharField(max_length=10)
    ends = models.CharField(max_length=50)
    never = models.CharField(max_length=500)
    on_occurrence = models.DateField(default=_timezone.now)
    after_occurrence = models.CharField(max_length=500)

    def __unicode__(self):
        return self.event_name
