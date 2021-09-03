<<<<<<< HEAD
from enum import unique
from rest_framework import fields, serializers
from calendarapp.models import Event
        

class EventSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Event
        fields = '__all__'
=======
from calendarapp.models import Event, Reminder
from rest_framework import serializers
from .models import Event, Reminder




class ReminderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reminder
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = '__all__'
>>>>>>> d43110e8f8683454fb53ae99ae965aa0d47bb6be
