from django.urls import path
from .views import *

urlpatterns = [
    path('blog/',blog_view,name="blog_view"),
]


