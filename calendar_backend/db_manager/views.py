from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import permissions, status

# from calendarapp import serializers as ca_serializers
import random, json, datetime
from .models import Test_Event
from .serializers import Test_EventSerializer
from .utils import write_data_to_db, read_data_from_db
# Create your views here.

class EventCreateDBView(generics.ListCreateAPIView):
    serializer_class = Test_EventSerializer
    queryset = Test_Event.objects.all()
    permission_class = (permissions.AllowAny,)
    def post(self, request):
        serializer = Test_EventSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.data 
            data['date'] = datetime.datetime.now().isoformat()
            data = json.dumps(data)
            response = write_data_to_db(data, many=False, object_id= random.randint(10000,99999))
            return Response({"status":True,"detail":"Successfully created event"})     
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def get(self, request):
    #     data = read_data_from_db()

    #     return Response(data)


