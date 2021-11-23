from rest_framework import routers
from .views import UserViewSet, CommentViewSet, external_api_view, ContestViewSet
from django.urls import path, include


# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
router = routers.DefaultRouter()
# post api/user, body name, password, email
# {'name': ['ashubhasdaasdsd'], 'password': ['123123sd'], 'email': ['asd@ads.com']}
router.register(r"user", UserViewSet)  # register user POST
router.register(r"comment", CommentViewSet)
router.register(r"contest", ContestViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
    path("external/", external_api_view, name="home"),
]
