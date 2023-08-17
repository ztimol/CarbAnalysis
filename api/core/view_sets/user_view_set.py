from core.models import User
from config.view_sets.base_model_view_set import BaseModelViewSet
from core.serializers.user_serializer import UserSerializer


class UserViewSet(BaseModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    http_method_names = ["get"]
