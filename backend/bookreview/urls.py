from django.contrib import admin
from django.urls import path , include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet , ReviewViewSet ,UserRegistrationSerializer

router = DefaultRouter()
router.register('book', BookViewSet)        #/<str:title>/
router.register('review', ReviewViewSet)
router.register('user', UserRegistrationSerializer)

urlpatterns = [
    path("",include(router.urls))
]
# urlpatterns = [
#     path('',test)
# ]