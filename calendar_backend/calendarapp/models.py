from django.db import models



class Event(models.Model):
    pass


class Reminder(models.Model):
    booked_date = models.DateField(help_text=u'Booked day')
    booked_time = models.TimeField(help_text=u'Booked time')
   
