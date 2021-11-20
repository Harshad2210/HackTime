from django.contrib.auth.models import User
from django.db.models import fields
from rest_framework import serializers

from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"


class ContestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contest
        fields = "__all__"
