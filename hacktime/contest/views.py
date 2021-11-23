import time
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User

from datetime import date, datetime

from rest_framework.schemas.coreapi import common_path

from .models import Contest, Comment
from rest_framework.response import Response
from rest_framework import viewsets, status, permissions, views
from .serializers import *
from .models import *
import requests
from rest_framework.views import APIView
from rest_framework.decorators import api_view


from rest_framework.schemas import *

from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def create(self, request, *args, **kwargs):
        comment_data = request.data
        user = request.user
        print(comment_data, user.id)
        contest_id = comment_data["parentContest"]
        contest = Contest.objects.get(id=contest_id)

        new_comment = Comment(
            commentBy=user,
            commentText=comment_data["commentText"],
            parentComment=None,
            parentContest=contest,
        )
        new_comment.save()
        return Response(data="Created user", status=status.HTTP_201_CREATED)


"""




"""


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ["post", "get"]

    def create(self, request, *args, **kwargs):
        post_data = request.data
        print(post_data)

        new_user = User(username=post_data["name"], email=post_data["email"])
        new_user.set_password(post_data["password"])

        try:
            new_user.save()
        except:
            return Response("error in user data", status=status.HTTP_400_BAD_REQUEST)

        return Response(data="Created user", status=status.HTTP_201_CREATED)


class ContestViewSet(viewsets.ModelViewSet):
    queryset = Contest.objects.all()
    serializer_class = ContestSerializer


@api_view(("GET",))
def external_api_view(request):
    MAX_RETRIES = 2
    clist_response = None
    if request.method == "GET":
        attempt_num = 0  # keep track of how many times we've retried
        while attempt_num < MAX_RETRIES:
            url = "https://clist.by/api/v1/contest/?username=1245lazy&api_key=47f40103516e25683bbbdf206abad617e4387562&resource__id=2&limit=400"
            payload = {
                "username": "1245lazy",
                "api_key": "47f40103516e25683bbbdf206abad617e4387562",
                "resource__id": "2",  # this is requesting contest list
            }
            r = requests.get(url, payload)
            # print(r)
            if r.status_code == 200:
                data = r.json()
                clist_response = r.json()
                # clist_response = json.load(clist_response)
                for cur_contest in clist_response["objects"]:
                    cur_id = int(cur_contest["id"])
                    cheese_blog = Contest.objects.filter(id=cur_id)
                    dateTemp = datetime.now()
                    dateNew = dateTemp.date()
                    parsed_date = datetime.strptime(
                        cur_contest["start"][:10], "%Y-%m-%d"
                    )
                    print("Here is from api", parsed_date)

                    if parsed_date < dateTemp:
                        continue

                    if len(cheese_blog) == 0:  # new contest
                        new_contest = Contest(
                            link=cur_contest["href"],
                            id=cur_contest["id"],
                            details=cur_contest["event"],
                            date=parsed_date,
                        )
                        new_contest.save()
                    else:
                        print(cheese_blog)

                return Response(data, status=status.HTTP_200_OK)
            else:
                attempt_num += 1
                # You can probably use a logger to log the error here
                time.sleep(5)  # Wait for 5 seconds before re-trying

        return Response({"error": "Request failed"}, status=r.status_code)
    else:
        return Response({"error": "asd"}, status=status.HTTP_200_OK)


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
