from types import DynamicClassAttribute
from django.utils import timezone as _timezone
from Core.utils import get_timezones, DEFAULT_TIMEZONE
from rest_framework import serializers





"""
Creating  a serializer class for events
"""
class EventSerializer(serializers.Serializer):
    id = serializers.ReadOnlyField()
    event_title = serializers.CharField(required=True)
    start_date = serializers.DateField(required=True)
    end_date = serializers.DateField(required=True)
    start_time = serializers.TimeField(required=True)
    end_time = serializers.TimeField(required=True)
    time_zone = serializers.ChoiceField(choices=get_timezones(), default=DEFAULT_TIMEZONE)
    description = serializers.CharField(max_length=250, required=True)
    all_day = serializers.BooleanField(required=True)
    event_tag = serializers.CharField(required=True)
    event_colour = serializers.CharField(required=True)


class ReminderSerializer(serializers.Serializer):
        pass
