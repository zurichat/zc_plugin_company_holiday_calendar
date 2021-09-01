#from os import O_NDELAY
from types import DynamicClassAttribute
from django.db import models

from django.db.models.fields import AutoField
# from django.utils.timezone import now



class Event(models.Model):
    
    event_name = models.CharField(max_length=500)
    start_date = models.DateField()
    end_date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    time_zone = models.CharField(max_length=250)  # able to accept any entry from the database names in the List of tz database time zones (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
    description = models.CharField(max_length=100000)
    event_tag = models.CharField(max_length=100)
    event_color = models.CharField(max_length=100)
    availability = models.BooleanField(default=True)
    visibility = models.CharField(max_length=100)
    
    def __str__(self):
        return self.event_name



class Reminder(models.Model):
    reminder_id = models.CharField(max_length=100000)
    event_name = models.CharField(max_length=500)
    date = models.DateField()
    time = models.TimeField()
    event_description = models.CharField(max_length=100000)
    custom_occurence = models.CharField(max_length=1000)
    repeat_every = models.IntegerField()
    repeat_on = models.CharField(max_length=10)
    ends = models.CharField(max_length=50)
    never = models.CharField(max_length=500)
    on_occurence = models.DateField()
    after_occurence = models.CharField(max_length=500)

    def __str__(self):
        return self.event_name

    

    



