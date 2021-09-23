from Core.utils import get_timezones, DEFAULT_TIMEZONE
from rest_framework import serializers


class ReminderSerializer(serializers.Serializer):
    """
    Creating  a serializer class for reminders.
    """

    repeat_choices = (
        ('DO_NOT', 'Do not repeat'),
        ('ED', 'Daily'),
        ('EW', 'Weekly on Wednesday'),
        ('EM', 'Monthly'),
        ('EY', 'Yearly'),
        ('EWD', 'Every week day')
    )

    _id = serializers.ReadOnlyField()
    title = serializers.CharField(required=True)
    date = serializers.DateField(required=False)
    time = serializers.TimeField(required=False)
    repeat = serializers.CharField(required=False)
    all_day = serializers.BooleanField(required=False)

    def update(self, instance, validated_data):
        for data in validated_data:
            instance[data] = validated_data[data]

        return self.instance

    def __str__(self):
        return f"{self.title} created successfully"


class CustomReminderSerializer(serializers.Serializer):
    """
      Creating  a serializer class for custom reminders.
      """
    etc = (
        ('W', 'Week'),
        ('M', 'Month'),
        ('Y', 'Year')
    )

    weekday = (
        ('mon', 'M'), ('tue', 'T'), ('wed', 'W'), ('thur', 'T'), ('fri', 'F'), ('sat', 'S'), ('sun', 'S')
    )
    _id = serializers.ReadOnlyField()
    Repeat_every = serializers.CharField(required=False)
    Repeat_on = serializers.CharField(required=False)
    Never = serializers.BooleanField(required=False)
    On = serializers.BooleanField(required=False)
    After = serializers.BooleanField(required=False)
    Date = serializers.DateField(required=False)
    Occurrence = serializers.IntegerField(max_value=10, min_value=1)

    def __str__(self):
        return "created successfully"

    def update(self, instance, validated_data):
        print(validated_data)
        for data in validated_data:
            instance[data] = validated_data.get(data, instance[data])
            return instance


class Event(object):
    def __init__(self, files, image):
        self.files = files
        self.image = image


class EventSerializer(serializers.Serializer):
    """
    Creating  a serializer class for events
    """
    _id = serializers.ReadOnlyField()
    event_title = serializers.CharField(required=True)
    start_date = serializers.DateField(required=True)
    end_date = serializers.DateField(required=True)
    start_time = serializers.TimeField(required=True)
    end_time = serializers.TimeField(required=True)
    time_zone = serializers.CharField(required=True)
    description = serializers.CharField(max_length=250, required=True)
    all_day = serializers.BooleanField(required=False)
    event_tag = serializers.CharField(required=True)
    event_colour = serializers.CharField(required=True)
    images = serializers.URLField(required=False)

    def __str__(self):
        return f"{self.event_title} created successfully"


class UpdateEventSerializer(serializers.Serializer):
    """
    Creating  a serializer class for updating events
    """
    _id = serializers.ReadOnlyField()
    event_title = serializers.CharField(required=False)
    start_date = serializers.DateField(required=False)
    end_date = serializers.DateField(required=False)
    start_time = serializers.TimeField(required=False)
    end_time = serializers.TimeField(required=False)
    time_zone = serializers.CharField(required=False)
    description = serializers.CharField(max_length=250, required=False)
    all_day = serializers.BooleanField(required=False)
    event_tag = serializers.CharField(required=False)
    event_colour = serializers.CharField(required=False)
    images = serializers.CharField(required=False)

    def __str__(self):
        return f"{self.event_title} updated successfully"
