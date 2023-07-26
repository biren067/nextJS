from rest_framework import serializers
from .models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('id' ,'title', 'content', 'post_date')
        # fields = '__all__'