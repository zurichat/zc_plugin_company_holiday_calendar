from enum import unique
from rest_framework import fields, serializers
from rest_framework.utils import serializer_helpers
from calendarapp.models import Event
        

class EventSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Event
        fields = '__all__'

        verbose_name = 'Event'
        verbose_name_plural = 'Events'
        
        ordering = ('event_name')
        unique_together = ('event_name', 'start')
        

    # def create(self, validated_data):
    #     """
    #     Returns a newly created 'Events' instance
    #     """
    #     return Event.objects.create(**validated_data)
    
    # def update(self, instance, validated_data):
    #     """
    #     Allows updating of instances. Serializes incoming data and validate for proper outputting.
    #     """
    #     instance.event_name = validated_data.get('event_name', instance.event_name)
    #     instance.event_name = validated_data.get('start_date', instance.start_date)
    #     instance.event_name = validated_data.get('end_date', instance.end_date)
    #     instance.event_name = validated_data.get('start_time', instance.start_time)
    #     instance.event_name = validated_data.get('end_time', instance.end_time)
    #     instance.event_name = validated_data.get('time_zone', instance.time_zone)
    #     instance.event_name = validated_data.get('description', instance.description)
    #     instance.event_name = validated_data.get('event_name', instance.event_name)
    #     instance.event_name = validated_data.get('event_tag', instance.event_tag)
    #     instance.event_name = validated_data.get('event_color', instance.event_color)
    #     instance.event_name = validated_data.get('event_color', instance.event_color)
    #     instance.event_name = validated_data.get('availability', instance.availability)
    #     instance.event_name = validated_data.get('visibility', instance.visibility)
    #     return instance

    # def destroy(self, instance, pk):
    #     pass
        

    # Fields reference
    # event_name 
    # start_date
    # end_date
    # start_time
    # end_time
    # time_zone
    # description
    # event_tag
    # event_color
    # availability
    # visibility