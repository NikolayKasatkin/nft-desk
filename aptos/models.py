from django.db import models
import os
from django.dispatch import receiver
from django.core.validators import MinLengthValidator

class ImagesAptos(models.Model):
    id_nft = models.PositiveIntegerField(default='')
    image = models.ImageField(upload_to='images', default="")
    description = models.CharField('Name', max_length=150)

    def __str__(self):
        return str(self.id_nft)

    def get_absolute_url(self):
        return f'/ImagesAptos/{self.id}'

    class Meta:
        verbose_name = 'ImagesAptos'
        verbose_name_plural = 'ImagesAptos'
