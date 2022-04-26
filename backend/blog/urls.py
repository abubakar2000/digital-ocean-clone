from django.urls import path,include

urlpatterns = [
    path('api/',include("blog.blog_api.urls"))
]
