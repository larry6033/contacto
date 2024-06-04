from django.contrib import admin
from .models import Contact ,UserProfile,Category,SubscriptionPlan,CustomUser
# from .models import CustomUser
# from .models import SubscriptionPlan
# from .models import Category
# from .models import UserProfile



# Register your models here.

admin.site.register(Contact)
admin.site.register(CustomUser)
admin.site.register(SubscriptionPlan)
admin.site.register(Category)
admin.site.register(UserProfile)