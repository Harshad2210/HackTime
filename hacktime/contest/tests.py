from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from django.contrib.auth.models import User

from .models import Contest


class UserTests(APITestCase):
    def test_create_account(self):
        """
        Test if we can create a new user
        """
        url = "/api/user/"
        data = {
            "name": "Shubham Goel",
            "not_email": "shubham@gmail.com",
            "password": "this_is_a_password",
        }
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().username, "Shubham Goel")


class ContestTests(APITestCase):
    def test_create_contest(self):
        """
        Test if we can create a new contest
        """
        url = "/api/contest/"

        contest_data = {
            "link": "https://www.codechef.com/DEC21?itm_medium=navmenu&itm_campaign=DEC21",
            "details": "codechef contest",
            "date": "2021-12-20",
        }

        response = self.client.post(url, contest_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Contest.objects.count(), 1)
