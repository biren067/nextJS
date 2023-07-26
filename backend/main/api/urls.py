from django.urls import path
from django.urls import path,include               
from rest_framework import routers                 
from api import views                             

# router = routers.DefaultRouter()                   
# router.register(r'post', views.list_post, 'list_post')  

urlpatterns = [
    path('blog/<str:title>', views.BlogPostAPI.as_view()),
    path('blog/', views.BlogPostAPI.as_view()),
    # path('blog/', include(router.urls))             
]


