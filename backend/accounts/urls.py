from django.urls import path,include
from .views import *

urlpatterns = [
    # authentication urls
    path('auth/', include('rest_auth.urls')),
    path('auth/registration/', include('rest_auth.registration.urls')),

    # social login and signup views urls
    path('facebook/', FacebookLogin.as_view(), name='fb_login'),
    path('google/', GoogleLogin.as_view(), name='fb_login'),
    path('github/', GithubLogin.as_view(), name='github_login'),

    # custom urls
    path('sendotp/', sendOtp, name='sendotp'),
    path('verifyotp/', verifyOtp, name='verifyotp')
]
