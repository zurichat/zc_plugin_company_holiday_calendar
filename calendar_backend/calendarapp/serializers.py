from django.db.models import fields
from rest_framework import serializers
from rest_framework.renderers import JSONRender
from .models import Event


class EventSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Event
        read_only_fields = ['id',]
        fields=['__all__']
        lookup_fields =['event_name', 'id']



    
        