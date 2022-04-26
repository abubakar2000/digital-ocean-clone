from django.db import models
from docs.models import Docs


class PageInformation(models.Model):
    title = models.TextField(max_length=500,null=True,blank=True)
    description = models.TextField(max_length=1000,null=True,blank=True)
    cards = models.ManyToManyField(Docs,related_name="page_information_docs_link",blank=True)

    def __str__(self):
        return f"{self.title}"

class Memory(models.Model):
    memory = models.CharField(max_length=100,null=True,blank=True)

    def __str__(self):
        return self.memory

class VCPU(models.Model):
    vCPU = models.CharField(max_length=100,null=True,blank=True)

    def __str__(self):
        return self.vCPU

class Disk(models.Model):
    disk = models.CharField(max_length=100,null=True,blank=True)

    def __str__(self):
        return self.disk

class PricingPlans(models.Model):
    title = models.CharField(max_length=500,null=True,blank=True)
    hourly_rate = models.FloatField(null=True,blank=True)
    memory = models.ForeignKey(Memory,on_delete=models.CASCADE,null=True,blank=True)
    vCPU = models.ForeignKey(VCPU,on_delete=models.CASCADE,null=True,blank=True)
    disk = models.ForeignKey(Disk,on_delete=models.CASCADE,null=True,blank=True)
    extra_nodes = models.CharField(max_length=100,null=True,blank=True)

    def __str__(self):
        return f"{self.hourly_rate}=>{self.memory}=>{self.vCPU}=>{self.disk}=>{self.extra_nodes}"

class SubProducts(models.Model):
    title = models.CharField(max_length=500,null=True,blank=True)
    description = models.TextField(max_length=1000,null=True,blank=True)
    featured = models.BooleanField(default=False)
    plans = models.ManyToManyField(PricingPlans,related_name="product_pricing_plans",blank=True)
    page_info = models.ForeignKey(PageInformation,on_delete=models.CASCADE,null=True,blank=True)

    def __str__(self):
        return self.title

class Products(models.Model):
    title = models.CharField(max_length=500,null=True,blank=True)
    description = models.TextField(max_length=1000,null=True,blank=True)
    sub_products = models.ManyToManyField(SubProducts,related_name="product_sub_products",blank=True)

    def __str__(self):
        return self.title