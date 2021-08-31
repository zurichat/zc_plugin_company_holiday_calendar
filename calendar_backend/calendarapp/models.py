from time import tzname
from django.db import models
from django.utils.timezone import now



class Event(models.Model):
    title = models.CharField(max_length=500)
    start_date = models.DateField(now)
    end_date = models.DateField()
    start_time = models.TimeField(auto_now_add=True)
    end_time = models.TimeField()
    time_zone = models.TimeField() 
    description = models.CharField(max_length=100000)
    event_tag = models.CharField(max_length=100)
    event_color = models.CharField(max_length=100)
    availability = models.BooleanField()
    visibility = models.CharField(max_length=100)
    



class Reminder(models.Model):
    pass
