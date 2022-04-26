from django.contrib import admin
from .models import *

admin.site.register(PageInformation)
admin.site.register(Memory)
admin.site.register(VCPU)
admin.site.register(Disk)
admin.site.register(PricingPlans)
admin.site.register(SubProducts)
admin.site.register(Products)