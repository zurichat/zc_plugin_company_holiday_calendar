from django.db import models
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
    
    # Added Suggestion
    class Meta:
        verbose_name = ('event')
        verbose_name_plural = ('events')
        ordering = ('-event_name', 'availability')
        app_label = 'calendarapp'
        
    # def get_absolute_url(self):
    #     from django.urls import reverse
    #     return reverse('event-detail', kwargs={'pk': self.pk})    
    
    def __str__(self):
        return self.event_name


class Reminder(models.Model):
    pass
