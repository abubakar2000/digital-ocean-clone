from django.urls import path
from .views import *


urlpatterns = [
    path('products/',product_view,name="un-featured-products"),
    path('product-by-id/',sub_product_view_by_id,name="products"),
    path('pricing-plan/',pricing_plan,name="pricing_plan"),
]