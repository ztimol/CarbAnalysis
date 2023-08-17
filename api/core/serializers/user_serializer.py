from rest_framework import serializers
from core.models import User


class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ["id", "first_name", "last_name", "full_name"]

    def get_full_name(self, obj):

        if obj.first_name and obj.last_name:
            return f"{obj.first_name} {obj.last_name}"
        else:
            return None
