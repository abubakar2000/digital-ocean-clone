from django.urls import path,include


urlpatterns = [
    path('api/',include('Product.Product_api.urls')),
]
