from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from .models import Contact , UserProfile,SubscriptionPlan, Category ,CustomUser
from rest_framework.response import Response
from .serializers import ContactSerializer, SubscriptionPlanSerializer,CategorySerializer,RegisterSerializer,ProfileSerializer,UserLoginSerializer
from rest_framework import status
from django.contrib.auth.hashers import check_password
from django.contrib.auth import login

# from serializers import 

# Create your views here.

class ContactView(APIView):
    def get(self,request,format=None):
        all_contacts=Contact.objects.all()
        serializer=ContactSerializer(all_contacts, many=True)
        return Response(serializer.data)

 

class SubscriptionView(APIView):
    def get(self,request,format=None):
        subscription_plans=SubscriptionPlan.objects.all()
        serializer=SubscriptionPlanSerializer(subscription_plans, many=True)
        return Response(serializer.data)

  

class ProfileView(APIView):
    def get(self,request,format=None):
        user_profile=UserProfile.objects.all()
        serializer=ProfileSerializer(user_profile, many=True)
        return Response(serializer.data)




class CategoryView(APIView):
    def get(self,request,format=None):
        user_category=Category.objects.all()
        serializer=CategorySerializer(user_category, many=True)
        return Response(serializer.data)


class UserRegisterationView(APIView):
    def post(self,request,format=None):
        serializer=RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return  Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    






class UserLoginView(APIView):
    def post(self,request,format=None):
        serializer=UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            email=serializer.validated_data.get("email")
            password=serializer.validated_data.get("password")
            try:
                user=CustomUser.objects.get(email=email)
            except CustomUser.DoesNotExist:
                user=None
            if user is not None:
                if check_password(password,user.password):
                    login(request,user)
                    return Response({"message":"login successfully"},status=status.HTTP_200_OK)
                else:
                    return Response({"message":"password error"},status=status.HTTP_401_UNAUTHORIZED)   
            else:
                return Response({"message":"No user with that email address"},status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)        

















# def signup(request):
#     return HttpResponse("hello  if i owe you money this is not my number i forgot if you owe me money i'm coming for you!!! ")
#     # return render(request,'signup.html')


# def login(request):
#     return HttpResponse("hello this is not my number ")
#     # return render(request,'signup.html')
     

# def dashboard(request):
#     return HttpResponse(" i'm comming for you!!! ")
#     # return render(request,'signup.html')
