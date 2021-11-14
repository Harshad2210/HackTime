from django.db import models
from django.db.models.base import Model

from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
from django.db.models.expressions import Case
from django.db.models.fields import DateTimeField

# Create your models here.


# class User(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.CharField(max_length=30)
#     password = models.CharField(max_length=30)


class Contest(models.Model):
    date = models.DateField(default="2021-12-12")
    votes = models.IntegerField(default=0)
    details = models.CharField(max_length=100)
    isRated = models.BooleanField(default=False)
    daysLeftToRegister = models.IntegerField(default=0)


class Comment(models.Model):
    commentBy = models.ForeignKey(User, on_delete=CASCADE)
    commentText = models.CharField(max_length=100)
    parentComment = models.ForeignKey("self", on_delete=CASCADE)  # self = comment
    parentContest = models.ForeignKey(Contest, on_delete=CASCADE, default=None)
