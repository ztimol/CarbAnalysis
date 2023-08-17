from rest_framework import viewsets
from django_filters import rest_framework as filters
from app_base.filters.base_filter import BaseFilter
from rest_framework.exceptions import APIException
from rest_framework import renderers


class BaseModelViewSet(viewsets.ModelViewSet):
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = BaseFilter
    renderer_classes = [renderers.JSONRenderer]
    handler500 = "rest_framework.exceptions.server_error"
