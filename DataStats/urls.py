from django.contrib import admin
from django.urls import path
from . import views
# from DataStats.views import loginUser


urlpatterns = [
    path('',views.index,name="DataStats"),
    path('login',views.loginUser,name="login"),  
    path('logout',views.logoutUser,name="logout"), 
    path("user_dashboard",views.user_dashboard,name="user_dashboard"), 
]

