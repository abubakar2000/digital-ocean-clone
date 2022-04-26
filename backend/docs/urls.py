from re import I
from django.urls import path,include


urlpatterns = [
    path('api/',include('docs.docs_api.urls'))
]