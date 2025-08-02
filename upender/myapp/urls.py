
from django.urls import path
from . import views

urlpatterns = [
    # path('', views.mrcet, name='mrcet'),
    # path('', views.index, name='index'),
    path('', views.contact, name='contact'),
    
    path('details/<slug:slug>/', views.details, name='details'),
]
