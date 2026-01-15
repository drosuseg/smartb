from django.urls import path
from .views import signin, signup

urlpatterns = [
    path('auth/signin/', signin),
    path('auth/signup/', signup),
]
