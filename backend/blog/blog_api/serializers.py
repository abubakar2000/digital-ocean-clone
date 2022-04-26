from rest_framework import serializers
from blog.models import *
from accounts.serializers import UserSerializer

class BlogCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategory
        fields = '__all__'

class BlogPostedOnSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPostedOn
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    category = BlogCategorySerializer(read_only=True)
    posted_on = BlogPostedOnSerializer(read_only=True)
    uploaded_by = UserSerializer(read_only=True)
    
    class Meta:
        model = Blog
        fields = '__all__'