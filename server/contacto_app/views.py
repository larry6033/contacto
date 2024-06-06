from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from .models import Contact , UserProfile,SubscriptionPlan, Category ,CustomUser
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import ContactSerializer, SubscriptionPlanSerializer,CategorySerializer,RegisterSerializer,ProfileSerializer,UserLoginSerializer
from rest_framework import status
from django.contrib.auth.hashers import check_password
from django.contrib.auth import login
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import Http404
# from serializers import 

# Create your views here.

class ContactView(APIView):
    permission_classes=[IsAuthenticated]
    
    def get(self,request,format=None):
        # all_contacts=Contact.objects.all()
        all_contacts=Contact.objects.filter(owner=request.user.id)

        serializer=ContactSerializer(all_contacts, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        data=request.data.copy()
        data['owner']=request.user.id
        
        serializer=ContactSerializer(data=data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    



class SingleContactView(APIView):
    permission_classes=[IsAuthenticated]
    
    def get_single_contact(self, id):
        try:
            contact=Contact.objects.get(id=id)
            return contact
        except Contact.DoesNotExist:
            raise Http404    
        
    def get(self, request, id, format=None):
        single_contact=self.get_single_contact(id)
        serializer=ContactSerializer(single_contact)
        return Response(serializer.data)
    
    def put(self, request, id, format=None):
        single_contact=self.get_single_contact(id)
        serializer=ContactSerializer(single_contact, request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return  Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self, request, id, format=None):
        single_contact=self.get_single_contact(id)
        single_contact.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
        
    
 

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
    
    
    def post(self,request,format=None):
        serializer=CategorySerializer(data=request.data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return  Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)    



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
                    refresh= RefreshToken.for_user(user)
                    # print(refresh)
                    access_token=refresh.access_token
                    # print(access_token)
                    login(request,user)
                    return Response({"refresh_token":str(refresh),"access_token":str(access_token)},status=status.HTTP_200_OK)
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
