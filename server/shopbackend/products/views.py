from django.shortcuts import render
from .models import Product
from rest_framework import viewsets
# from rest_framework import permissions
from .serializers import ProductSerializer


# class ProductViewSet(viewsets.ModelViewSet):
#     queryset = Product.objects.all().order_by('product_id')
#     serializer_class = ProductSerializer
#     http_method_names = ['get', 'head']
#     # permission_classes = [permissions.IsAuthenticated]



from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class ProductList(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductDetail(APIView):
    def get_object(self, pk):
        try:
            return Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        product = self.get_object(pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)


class ProductListByCategory(APIView):
    def get(self, request, category,format=None):
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)