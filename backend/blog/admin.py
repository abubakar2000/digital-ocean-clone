from django.contrib import admin
from .models import *


admin.site.register(BlogCategory)
admin.site.register(BlogPostedOn)
admin.site.register(Blog)