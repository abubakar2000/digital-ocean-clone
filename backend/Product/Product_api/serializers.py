from rest_framework import serializers
from Product.models import *
from docs.docs_api.serializers import DocsSerializer

class PageInformationSerializer(serializers.ModelSerializer):
    cards = DocsSerializer(read_only=True,many=True)
    class Meta:
        model = PageInformation
        fields = '__all__'

class VCPUSerializer(serializers.ModelSerializer):
    class Meta:
        model = VCPU
        fields = '__all__'

class DiskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disk
        fields = '__all__'

class MemorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Memory
        fields = '__all__'

class PricingPlansSerializer(serializers.ModelSerializer):
    memory = MemorySerializer(read_only=True)
    vCPU = VCPUSerializer(read_only=True)
    disk = DiskSerializer(read_only=True)
    class Meta:
        model = PricingPlans
        fields = '__all__'

class SubProductsSerializer(serializers.ModelSerializer):
    plans = PricingPlansSerializer(read_only=True,many=True)
    page_info = PageInformationSerializer(read_only=True)
    class Meta:
        model = SubProducts
        fields = '__all__'

class ProductsSerializer(serializers.ModelSerializer):
    sub_products = SubProductsSerializer(read_only=True,many=True)

    class Meta:
        model = Products
        fields = '__all__'
