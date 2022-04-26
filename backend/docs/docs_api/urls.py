from django.urls import path
from .views import *

urlpatterns = [
    path('docs/',docs_view,name="docs"),  
    path('searchdocs/',search_docs,name="searchdocs")
]
