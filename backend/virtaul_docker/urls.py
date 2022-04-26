from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('grappelli/', include('grappelli.urls')),
    path('admin/', admin.site.urls),
    path('api/accounts/', include('accounts.urls')),
    path('core/', include('core.urls')),
    path('products/', include('Product.urls')),
    path('docs/', include('docs.urls')),
    path('blog/', include('blog.urls')),
    path('community/', include('community.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                         document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
