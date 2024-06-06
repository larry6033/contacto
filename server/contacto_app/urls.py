from django.urls import path
from .import views



urlpatterns=[
# path('signup', views.signup,name="signup")
# path('login', views.signup,name="login")
# path('dashboard', views.signup,name="dashboard")
path('contacts/',views.ContactView.as_view(), name='contact'),
path('subscription/',views.SubscriptionView.as_view(), name='subscriptionplan'),
path('profile/',views.ProfileView.as_view(), name='profile'),
path('category/',views.CategoryView.as_view(), name='category'),
path('register/',views.UserRegisterationView.as_view(), name='register'),
path('login/',views.UserLoginView.as_view(), name='login'),
path('contacts/<id>',views.SingleContactView.as_view(), name='single_contact'),
]