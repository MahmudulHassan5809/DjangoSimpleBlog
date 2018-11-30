from django.urls import path
from . import views

app_name = 'articles'

urlpatterns = [
   path('',views.article_list , name='article_list'),
   path('create/',views.article_create , name='article_create'),
   path('<slug:slug>/',views.article_details , name='article_details')
]
