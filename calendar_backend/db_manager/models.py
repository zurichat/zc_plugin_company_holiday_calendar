from django.db import models

# Create your models here.

class Test_Event(models.Model):
	date = models.DateTimeField()
	name = models.CharField(max_length=50)
	description = models.CharField(max_length=100)