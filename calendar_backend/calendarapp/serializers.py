from enum import unique
from rest_framework import fields, serializers
from calendarapp.models import Event
        

class EventSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Event
        fields = '__all__'
