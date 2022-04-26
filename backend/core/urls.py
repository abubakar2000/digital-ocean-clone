from django.urls import path
from .views import search_whole_website

urlpatterns = [
    path('api/searchwhole/',search_whole_website,name="search_whole_website")
]