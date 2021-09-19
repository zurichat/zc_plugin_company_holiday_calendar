from rest_framework import permissions
import requests

def verify_user_authentication(request):
    token = request.query_params.get("token")
    headers = {"Authorization": f"Bearer {token}"}
    url = "https://api.zuri.chat/auth/verify-token"
    response_auth = requests.get(url=url, headers=headers)

    if response_auth.status_code != 200:
        return False

    if response_auth.json()['message'] == 'verified':
        return True
    return False


class UserIsAuthenticated(permissions.BasePermission):
    def has_permission(self, request, view):
        return verify_user_authentication(request)