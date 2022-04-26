from rest_framework import serializers
from docs.models import *

class DocsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Docs
        fields = '__all__'