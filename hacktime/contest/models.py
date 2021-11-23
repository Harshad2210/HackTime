from django.db import models
from django.db.models.base import Model

from django.contrib.auth.models import User
from django.db.models.deletion import CASCADE
from django.db.models.expressions import Case
from django.db.models.fields import DateTimeField
from django.utils import tree

# Create your models here.


# class User(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.CharField(max_length=30)
#     password = models.CharField(max_length=30)


class Contest(models.Model):
    date = models.DateField(default="2021-12-12")  # end
    votes = models.IntegerField(default=0)
    details = models.CharField(max_length=100)  # blank
    isRated = models.BooleanField(default=False)  # False
    daysLeftToRegister = models.IntegerField(default=0)  # 0
    link = models.URLField(blank=True)  # href


class Comment(models.Model):
    commentBy = models.ForeignKey(User, on_delete=CASCADE)
    commentText = models.CharField(max_length=100)
    parentComment = models.ForeignKey(
        "self", on_delete=CASCADE, default=None, blank=True, null=True
    )  # self = comment
    parentContest = models.ForeignKey(Contest, on_delete=CASCADE, default=None)


"""
API response 
{
    "duration": 11700,
    "end": "2021-06-26T17:15:00",
    "event": "June Lunchtime 2021",
    "href": "https://www.codechef.com/LTIME97",
    "id": 26473527,
    "resource": {
        "icon": "/imagefit/static_resize/64x64/img/resources/codechef_com.png",
        "id": 2,
        "name": "codechef.com"
    },
    "start": "2021-06-26T14:00:00"
},
"""
