from itertools import product
from rest_framework.decorators import api_view,authentication_classes,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from docs.models import *
from .serializers import *


@api_view(['GET'])
def docs_view(request):
    if request.method == 'GET':
        product_id =  request.GET.get('product_id',None)
        doc_id = request.GET.get('doc_id',None)

        if product_id is not None:
            docs = Docs.objects.filter(product__id=product_id)
        elif doc_id is not None:
            docs = Docs.objects.filter(id=doc_id)
        else:
            docs = Docs.objects.all()
        serializer = DocsSerializer(instance=docs,many=True)
        data = {
            "status":"ok",
            "message":"Successfull!",
            "data": serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)
@api_view(['GET'])
def search_docs(request):
    if request.method == 'GET':
        search_params = request.GET.get('search_params','')
        docs = Docs.objects.filter(title__icontains=search_params)
        serializer = DocsSerializer(instance=docs,many=True)
        data = {
            "status":"ok",
            "message":"Successfull!",
            "data": serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)