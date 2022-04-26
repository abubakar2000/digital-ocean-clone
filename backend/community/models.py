from django.db import models
from accounts.models import CustomUser

class Category(models.Model):
    title = models.TextField(null=True,blank=True)

    def __str__(self):
        return self.title

class StepsContent(models.Model):
    HTML = models.TextField(null=True,blank=True)
    CSS = models.TextField(null=True,blank=True)

class Steps(models.Model):
    title = models.CharField(max_length=1000,null=True,blank=True)
    content = models.ForeignKey(StepsContent,on_delete=models.CASCADE,null=True,blank=True)

    def __str__(self):
        return self.title

class Answers(models.Model):
    answer = models.TextField(null=True,blank=True)
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE,null=True,blank=True)
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.user.email

class Comments(models.Model):
    comment = models.TextField(null=True,blank=True)
    user = models.ForeignKey(CustomUser,on_delete=models.CASCADE,null=True,blank=True)
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.user.email


class Questions(models.Model):
    title = models.TextField(null=True,blank=True)
    description = models.TextField(null=True,blank=True)
    posted_date = models.DateTimeField(auto_now_add=True)
    answers = models.ManyToManyField(Answers,related_name="question_answers")
    comments = models.ManyToManyField(Comments,related_name="comments_answers")
    category = models.ManyToManyField(Category,related_name="question_category")
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class Tutorials(models.Model):
    title = models.TextField(null=True,blank=True)
    description = models.TextField(null=True,blank=True)
    steps = models.ManyToManyField(Steps,related_name="tutorial_steps")
    category = models.ManyToManyField(Category,related_name="tutorial_category")
    featured = models.BooleanField(default=False,null=True,blank=True)
    def __str__(self):
        return self.title
