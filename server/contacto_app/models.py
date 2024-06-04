from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
# Create your models here.




class CustomUserManager(BaseUserManager):
    def create_user(self,email,password=None,**extra_kwargs):
        if not email:
            raise ValueError("Email field required")
        else:
            email=self.normalize_email(email)    
            user = self.model(email=email,**extra_kwargs)
            user.set_password(password)
            user.save(using=self_db)

    def create_superuser(self,email,password=None,**extra_kwargs):
        extra_kwargs.setdefault("is_staff",True)
        extra_kwargs.setdefault("is_superuser",True)

        if extra_kwargs.get('is_staff') is not True:
            raise ValueError("super user must have is_staff set to True")   
    
        if extra_kwargs.get('is_superuser') is not True:
            raise ValueError("super user must have is_superuser set to True")   
        return self.create_user(email,password,**extra_kwargs)   



class CustomUser(AbstractBaseUser): 
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    email=models.EmailField(max_length=200,blank=True,null=True,unique=True)
    # is_staff=models.BooleanField(True)
    is_active=models.BooleanField(default=True)
    

    objects=CustomUserManager
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=["first_name","last_name"]

    def __str__(self):
        return self.first_name



class Category(models.Model):
    name=models.CharField(max_length=50)

  
    def __str__(self):
        return self.name

class Contact(models.Model):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    email=models.EmailField(max_length=200,blank=True,null=True,unique=True)
    phonenumber=models.IntegerField()
    address=models.TextField(blank=True,null=True)
    birthday=models.DateField(blank=True,null=True)
    owner=models.ForeignKey(CustomUser,on_delete=models.CASCADE,default=None)
    category=models.ManyToManyField(Category)

    def __str__(self):
        return self.first_name+"       " +self.last_name




class SubscriptionPlan(models.Model):
    name=models.CharField(max_length=50)
    max_contacts=models.CharField(max_length=100)
   

    def __str__(self):
        return self.name

class UserProfile(models.Model):
    user=models.OneToOneField(CustomUser,on_delete=models.CASCADE)
    subscription_plan=models.ForeignKey(SubscriptionPlan,on_delete=models.SET_NULL,null=True)
    def __str__(self):

        return f"{self.user.first_name}'s profile"


