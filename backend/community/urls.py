from django.urls import path,include

urlpatterns = [
    path('api/',include("community.community_api.urls"))
]
