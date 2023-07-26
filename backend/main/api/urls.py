from django.urls import path
from . import views
urlpatterns = [
    path('list/<str:title>', views.list_post),
]
