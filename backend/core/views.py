from rest_framework.decorators import api_view,authentication_classes,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from docs.models import Docs
from docs.docs_api.serializers import DocsSerializer
from Product.models import SubProducts
from Product.Product_api.serializers import SubProductsSerializer
from blog.models import Blog
from blog.blog_api.serializers import BlogSerializer

@api_view(['GET'])
def search_whole_website(request):
    search_params = request.GET.get('search_params',None)
    if search_params is None:
        data = {
            "status":"error",
            "message":"empty search!!",
            "data":[]
        }
        return Response(data=data,status=status.HTTP_404_NOT_FOUND)

    products = SubProducts.objects.filter(title__startswith=search_params)
    product_serializer = SubProductsSerializer(instance=products,many=True)
    blogs = Blog.objects.filter(title__startswith=search_params)
    blog_serializer = BlogSerializer(instance=blogs,many=True)
    docs = Docs.objects.filter(title__startswith=search_params)
    doc_serializer = DocsSerializer(instance=docs,many=True)

    data = {
            "status":"error",
            "message":"empty search",
            "data":{
                "products":product_serializer.data,
                "blogs":blog_serializer.data,
                "docs":doc_serializer.data,
            }
        }
    return Response(data=data,status=status.HTTP_200_OK)