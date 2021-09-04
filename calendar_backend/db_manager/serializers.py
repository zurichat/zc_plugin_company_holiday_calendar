from rest_framework import serializers
from .models import Test_Event


class Test_EventSerializer(serializers.ModelSerializer):
	class Meta:
		model = Test_Event
		fields = ("name","description")

