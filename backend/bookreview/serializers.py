from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Book , Review
from django.contrib.auth.models import User
class ReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = ['book','rating', 'comment']

    def validate(self, data):
        print(data)
        if not all(data.get(field) for field in ['book', 'rating', 'comment']):
            raise serializers.ValidationError("All fields are required , Give me a Rating About Book")
        return data

    def create(self,validated_data):
        print(validated_data['rating'])
        rating_instance = Review.objects.create(
            book = validated_data['book'] ,
            rating = validated_data['rating'],
            comment = validated_data['comment']
        )
        return rating_instance

    def update(self, instance, validated_data):
        print(validated_data['book'])
        if validated_data['book'] == instance.books:
            instance.rating = validated_data.get('rating', instance.rating)
            instance.comment = validated_data.get('comment', instance.comment)
            instance.save()

        return instance


# obj = ReviewSerializer().create
# print('obj ==',obj)

    # def update(self, instance, validated_data):
    #     print(validated_data[''])
    #     if validated_data :
    #         instance.rating = validated_data.get('rating', instance.rating)
    #         instance.review = validated_data.get('review', instance.review)
    #         instance.save()

class BookSerializer(ModelSerializer):
    # reviews = ReviewSerializer(many=True, read_only=True)
    # book = serializers.SerializerMethodField()

    class Meta:
        model = Book
        fields = ('title', 'author', 'genre', 'cover_image', 'description')

    # def search_book_name(query):
    #     title = query.split()
    #     results = Book.objects.filter(name__icontains=title)
    #     return results
    

class UserRegistration(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'first_name', 'last_name')

    def validate(self, data):
        if not all(data.get(field) for field in ['username', 'email', 'password', 'first_name', 'last_name']):
            raise serializers.ValidationError("All fields are required.")
        return data

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
    