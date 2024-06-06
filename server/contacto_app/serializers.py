from django.core import serializers
from rest_framework import  serializers
from .models import Contact, CustomUser, SubscriptionPlan,UserProfile,Category



class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model=Contact
        fields=("id","first_name","last_name","email","phonenumber","address","birthday","owner","category")




class SubscriptionPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model=SubscriptionPlan
        fields=("id","name","max_contacts")
        



class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile
        fields=("id","user","subscription_plan")
        




class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=("id","name")




class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=("id","first_name","last_name","email","password")
        extra_kwargs={"password":{"write_only":True}}
    def create(self,validated_data):
        password=validated_data.pop("password")
        user=self.Meta.model(**validated_data)
        user.set_password(password)
        user.save()
        return user
    
    



class UserLoginSerializer(serializers.Serializer):
    email=serializers.EmailField()
    password=serializers.CharField(max_length=30)
