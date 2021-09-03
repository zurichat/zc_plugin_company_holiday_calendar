from calendarapp.models import Event, Reminder
from django.db.models import fields

from rest_framework import serializers
from .models import Event, Reminder

# creating a model serializer


class EventSerializer(serializers.ModelSerializer):
    pass


class ReminderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reminder
        fields = '__all__'