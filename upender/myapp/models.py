
from django.db import models

# Create your models here.


    

class students(models.Model):
    #name= models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    age = models.IntegerField()
    phoneno = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, blank=True, null=True)
    photo = models.ImageField
    def __str__(self):
        return f"{self.email}-{self.age}-{self.phoneno}"
    

    