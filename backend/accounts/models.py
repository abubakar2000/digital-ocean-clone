from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    email = models.EmailField(verbose_name='email',max_length=255)
    otp = models.CharField(max_length=4,null=True,blank=True)
    first_name= models.CharField(max_length=500,null=True,blank=True)
    last_name= models.CharField(max_length=500,null=True,blank=True)
    verified = models.BooleanField(default=False) 

    USERNAME_FIELD ='username'
    EMAIL_FIELD = 'email'