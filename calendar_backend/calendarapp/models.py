# from os import O_NDELAY
from types import DynamicClassAttribute
from django.db import models
from django.utils import timezone as _timezone
from core.utils import get_timezones, DEFAULT_TIMEZONE

from django.db.models.fields import AutoField


def get_sentinel_event():
    return Event.objects.get_or_create(event_name="")[0]


# Create an additional method to return only the id - default expects an id and not a Model object
def get_sentinel_event_id():
    return get_sentinel_event().id


class EventMixin(object):
    # Common mixin for events

    NORMAL = 'NM'
    ALL_DAY = 'AD'
    TYPE_CHOICES = (
        (NORMAL, 'normal'),
        (ALL_DAY, 'all day'),
    )


class Event(models.Model):

    event_name = models.CharField(max_length=500)
    type = models.CharField(max_length=2, choices=EventMixin.TYPE_CHOICES, default=EventMixin.NORMAL)
    start = models.DateTimeField('Start event', default=_timezone.now)
    end = models.DateTimeField('Stop event', default=_timezone.now)
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
