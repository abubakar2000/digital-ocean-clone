from rest_framework.decorators import api_view,authentication_classes,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from Product.models import *
from .serializers import *


@api_view(['GET'])
def product_view(request):
    if request.method == 'GET':
        products = Products.objects.all()
        serializer = ProductsSerializer(instance=products,many=True)
        data = {
            "status":"ok",
            "message":"Successfull!",
            "data": serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)


@api_view(['GET'])
def sub_product_view_by_id(request):
    if request.method == 'GET':
        id = request.GET.get('id',None)
        if id is None:
            data = {
            "status":"error",
            "message":"id is not found",
            }
            return Response(data=data,status=status.HTTP_404_NOT_FOUND)
        product = SubProducts.objects.get(pk=id)
        serializer = SubProductsSerializer(instance=product)
        data = {
            "status":"ok",
            "message":"Successfull!",
            "data": serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)

@api_view(['GET'])
def pricing_plan(request):
    if request.method == 'GET':
        objs = PricingPlans.objects.all()
        serializer = PricingPlansSerializer(objs,many=True)
        data = {
            "status":"ok",
            "message":"Successfull!",
            "data": serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)

