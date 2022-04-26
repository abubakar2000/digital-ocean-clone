from rest_framework.decorators import api_view,authentication_classes,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from docs.models import *
from .serializers import *


@api_view(['GET'])
def blog_view(request):
    if request.method == 'GET':
        blog_id = request.GET.get('blog_id',None)
        if blog_id is not None:
            blog = Blog.objects.filter(id=blog_id)
        else:
            blog = Blog.objects.all()
        serializer = BlogSerializer(instance=blog,many=True)
        data = {
            "status":"ok",
            "message":"Successfull!",
            "data": serializer.data
        }
        return Response(data=data,status=status.HTTP_200_OK)