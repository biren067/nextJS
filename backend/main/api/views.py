from django.shortcuts import render
from .serializers import BlogPostSerializer 
# from rest_framework import viewsets      
from .models import BlogPost                 
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

# class list_post(viewsets.ModelViewSet):  
#     serializer_class = BlogPostSerializer   
#     queryset = BlogPost.objects.all() 


class BlogPostAPI(APIView):
    def get(self,request,title=None,format=None):
        if title is not None:
            posts = BlogPost.objects.get(title=title)
            serializer = BlogPostSerializer(posts)
            return Response(serializer.data)
        posts = BlogPost.objects.all()
        serializer = BlogPostSerializer(posts,many = True)
        return Response(serializer.data)

    def post(self,request,format=None):
        serializer = BlogPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Created"},status=status.HTTP_201_CREATED)
        return Response(serializer.error,status=status.HTTP_400_BAD_REQUEST)

    def put(self,request,format=None):
        pass
    
    def patch(self,request,format=None):
        pass
    
    def delete(self,request,format=None):
        pass