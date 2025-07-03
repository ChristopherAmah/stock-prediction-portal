from django.urls import path
from accounts import views as UserView



urlpatterns = [
    # Define your API endpoints here
    path('register/', UserView.RegisterView.as_view()),
]