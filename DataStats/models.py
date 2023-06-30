from django.db import models

class Login(models.Model):
    roles=models.CharField(max_length=122)
    password=models.CharField(max_length=12)
    date=models.DateField()

    

    def __str__(self):
        return self.roles
