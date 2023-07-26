from django.shortcuts import render,HttpResponse

# Create your views here.
def list_post(request,*args,**kwargs):
    print("args",args)
    print("kwargs",kwargs)
    return HttpResponse(f"<h1>hi how are you! {kwargs['title']}</h1>")