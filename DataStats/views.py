from django.shortcuts import render ,HttpResponse,redirect
from django.contrib.auth.models import User
from DataStats.models import Login
from datetime import datetime
import sqlite3
from django.contrib.auth import logout,authenticate,login

# Create your views here.
def index(request):

    # if request.user.is_anonymous:
    #     return redirect("/login")
    return render(request, 'index.html')
 
def loginUser(request):
    display_User_roles=Login.objects.all()
    
    if request.method=="POST":
        role= request.POST.get('role')
        password= request.POST.get('password')
        print(role,password)

        LoginRoles= authenticate(role=role, password=password)
        print(LoginRoles)
        if LoginRoles is not None:
            login(request,LoginRoles)
            return redirect("/")

        else :
            return render(request,'login.html',{"Login":display_User_roles})
             
    return render(request,'login.html',{"Login":display_User_roles})

def logoutUser(request):
    logout(request)
    return redirect("/login")

def user_dashboard(request):
    return render(request,'user_dashboard.html')
    # return redirect("/user_dashboard")