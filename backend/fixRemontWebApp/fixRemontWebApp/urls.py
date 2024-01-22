"""
URL configuration for fixRemontWebApp project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
# from django.urls import path, include
# #from backend.fixRemontWebApp.api import views
# from django.conf import settings
# from django.conf.urls.static import static
# from django.contrib.auth import views as auth_views
# from django.contrib.auth.views import LogoutView
# import debug_toolbar
#
#
# urlpatterns = [
#     path('admin/', admin.site.urls),
#     # path('login/', views.login_view, name="login"),
#     # path('register/', views.register_user, name="register"),
#     # path('policy/', views.policy, name="policy"),
#     # path('forgot_password/', views.forgot_password, name="forgot_password"),
#     # path('main/', views.main, name="main"),
#     # path('orders/', views.orders, name="orders"),
#     # path('bonus/', views.bonus, name="bonus"),
#     # path('profile/', views.profile, name="profile"),
#     # path('support/', views.support, name="support"),
#     # path('news/', views.news, name="news"),
#     # path('policy/', views.policy, name="policy"),
#     # path('notifications/', views.notifications, name="notifications"),
#     # path('new_constructor/', views.new_constructor, name="new_constructor"),
#     # path('license/', views.license, name="license"),
#     # path('franchise/', views.franchise, name="franchise"),
# ]
from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('account/', include('account.urls')),
]

