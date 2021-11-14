import time
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User


# from django.contrib.auth.models import User
from .models import Contest, Comment
from rest_framework.response import Response
from rest_framework import viewsets, status, permissions, views
from .serializers import *
from .models import *
import requests
from rest_framework.views import APIView
from rest_framework.decorators import api_view

# blacklist token
# from rest_framework_simplejwt.tokens import RefreshToken
# from rest_framework.decorators import action, api_view, schema

from rest_framework.schemas import *


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ["post"]

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


MAX_RETRIES = 2


@api_view(("GET",))
def external_api_view(request):
    if request.method == "GET":
        # return Response({"error": "asd"}, status=status.HTTP_200_OK)

        attempt_num = 0  # keep track of how many times we've retried
        while attempt_num < MAX_RETRIES:
            url = "https://clist.by/api/v1/contest/?username=1245lazy&api_key=47f40103516e25683bbbdf206abad617e4387562&resource__id=2"
            payload = {
                "username": "1245lazy",
                "api_key": "47f40103516e25683bbbdf206abad617e4387562",
                "resource__id": "2",
            }
            r = requests.get(url, payload)
            print(r)
            if r.status_code == 200:
                data = r.json()
                return Response(data, status=status.HTTP_200_OK)
            else:
                attempt_num += 1
                # You can probably use a logger to log the error here
                time.sleep(5)  # Wait for 5 seconds before re-trying
        return Response({"error": "Request failed"}, status=r.status_code)
    else:
        return Response({"error": "asd"}, status=status.HTTP_200_OK)


# class BlacklistTokenView(views.APIView):
#     premission_classes = [permissions.AllowAny]

#     def post(self, request):
#         try:
#             refresh_token = request.data[
#                 "refresh_token"
#             ]  # cur refresh token of the user

#             token = RefreshToken(refresh_token)  # create new refresh token
#             token.blacklist()  # blacklist this new refresh token
#         except Exception as e:
#             return Response(status=status.HTTP_400_BAD_REQUEST)

#         return Response(data="logout is done", status=status.HTTP_200_OK)
