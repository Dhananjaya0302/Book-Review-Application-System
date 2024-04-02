from django.db import models
# from django.contrib.auth.models import User
# Create your models here.

# 			              1    	2	    3	   4    	5
# book table --->   book id , title , author , genre , publication year .

class Author(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return str(self.id)


class Book(models.Model):
    title = models.CharField( max_length=200 , null=False)
    author = models.CharField(max_length=200 , null= True)
    genre = models.CharField(max_length=100, null=True)
    cover_image = models.ImageField(upload_to='covers/', blank=True)
    description = models.TextField(null=True)
    def __str__(self):
        return str(self.id)

class Review(models.Model):
    book = models.ForeignKey( Book , on_delete=models.CASCADE)
    rating = models.IntegerField(null=True)
    comment = models.TextField(null=True)

    def __str__(self):
        return self.id

