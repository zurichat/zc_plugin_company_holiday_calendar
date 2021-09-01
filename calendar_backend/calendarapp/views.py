from django.http import JsonResponse
from django.shortcuts import HttpResponse
from django.views.generic import DeleteView

from .models import Event
# Create your views here.


def calendar_view(request):
    return HttpResponse("This is where all calender activities are performed and displayed")


class DeleteEventView(DeleteView):
    model = Event

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.delete()
        payload = {"message": "Deleted event successfully"}
        return JsonResponse(payload)
