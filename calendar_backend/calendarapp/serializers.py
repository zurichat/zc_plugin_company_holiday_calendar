from calendarapp.models import Event, Reminder
from django.db.models import fields

from rest_framework import serializers
from .models import Event, Reminder

# creating a model serializer



class ReminderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reminder
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):

    class Meta:
        model = Event
        fields = '__all__'
