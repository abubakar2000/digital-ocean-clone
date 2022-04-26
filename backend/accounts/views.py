from rest_framework.decorators import api_view,authentication_classes,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *
from rest_framework.authtoken.models import Token

from rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client

from allauth.socialaccount.providers.github.views import GitHubOAuth2Adapter
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter

from django.core.mail import send_mail
from virtaul_docker.settings import EMAIL_HOST_USER
import random


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter
    client_class = OAuth2Client
    callback_url = 'localhost:8000'

class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client
    callback_url = 'localhost:8000'

class GithubLogin(SocialLoginView):
    adapter_class = GitHubOAuth2Adapter
    client_class = OAuth2Client
    callback_url = "localhost:8000"



@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def sendOtp(request):
    user = Token.objects.get(key=request.auth.key).user
    otp = random.randint(1000,9999)
    send_mail("EMAIL VERIFICATION",f"YOUR VERIFICATION OTP IS {otp}",EMAIL_HOST_USER,[user.email],fail_silently=True)
    user.otp = otp
    user.save()
    data={
        "status":"ok",
        "message":f"OTP Successfully sended on {user.email}"
    }
    return Response(data=data,status=status.HTTP_200_OK)

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def verifyOtp(request):
    user = Token.objects.get(key=request.auth.key).user
    otp = request.POST.get('otp',None)
    if otp == None:
        data = {
            "status":"error",
            "message":"otp not found"
        }
        return Response(data=data,status=status.HTTP_404_NOT_FOUND)
    if user.otp == otp:
        user.verified=True
        user.is_active=True
        user.save()
        data={
        "status":"ok",
        "message":f"OTP Successfully verified!"
        }
        return Response(data=data,status=status.HTTP_200_OK)
    else:
        data = {
            "status":"error",
            "message":"Invalid OTP!"
        }
        return Response(data=data,status=status.HTTP_400_BAD_REQUEST)