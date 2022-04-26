from django.db import models
from accounts.models import CustomUser


class BlogCategory(models.Model):
    title = models.CharField(max_length=1000,null=True,blank=True)
    
    def __str__(self):
        return self.title

class BlogPostedOn(models.Model):
    title = models.TextField(null=True,blank=True)
    url = models.URLField(null=True,blank=True)
    
    def __str__(self):
        return self.title

class Blog(models.Model):
    title = models.TextField(null=True,blank=True)
    description = models.TextField(null=True,blank=True)
    category = models.ForeignKey(BlogCategory,on_delete=models.CASCADE,null=True,blank=True)
    posted_on = models.ForeignKey(BlogPostedOn,on_delete=models.CASCADE,null=True,blank=True)
    posted_date = models.DateTimeField(auto_now_add=True,null=True,blank=True)
    image = models.FileField(null=True,blank=True)
    uploaded_by = models.ForeignKey(CustomUser,on_delete=models.CASCADE,null=True,blank=True)
    CONTENT_HTML = models.TextField(null=True,blank=True)
    CONTENT_CSS = models.TextField(null=True,blank=True)
    featured = models.BooleanField(null=True,blank=True,default=False)

    def __str__(self):
        return self.title

