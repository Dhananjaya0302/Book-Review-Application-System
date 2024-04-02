# from django.shortcuts import render
# from django.http import HttpResponse
# Create your views here.
# def test(req):
#
#     return HttpResponse("hii")

from django.contrib.auth.models import User
from rest_framework.viewsets import ModelViewSet
from .models import Book, Review
from .serializers import BookSerializer, ReviewSerializer , UserRegistration
from rest_framework import serializers
class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class ReviewViewSet(ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class UserRegistrationSerializer(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserRegistration
