from django.shortcuts import HttpResponse



def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")





class EventViewsets(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer