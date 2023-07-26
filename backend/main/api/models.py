from django.db import models

# Create your models here.
class BlogPost(models.Model):
    title = models.CharField(max_length=1000)
    content = models.TextField()
    image01 = models.ImageField(upload_to ='images')
    post_date = models.DateField()
  
    def __str__(self):
        return self.title