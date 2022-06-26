from django.db import models
import os
from django.dispatch import receiver
from django.core.validators import MinLengthValidator

class Images(models.Model):
    id_nft = models.PositiveIntegerField(default='')
    image = models.ImageField(upload_to='images', default="")
    description = models.CharField('Name', max_length=150)

    def __str__(self):
        return str(self.id_nft)

    def get_absolute_url(self):
        return f'/images/{self.id}'

    class Meta:
        verbose_name = 'Images'
        verbose_name_plural = 'Images'

# @receiver(models.signals.post_delete, sender=Images)
# def auto_delete_file_on_delete(sender, instance, **kwargs):
#     if instance.image:
#         if os.path.isfile(instance.image.path):
#             os.remove(instance.image.path)
#
# @receiver(models.signals.pre_save, sender=Images)
# def auto_delete_file_on_change(sender, instance, **kwargs):
#     if not instance.pk:
#         return False
#
#     try:
#         old_file = FreelanceW.objects.get(pk=instance.pk).image
#     except FreelanceW.DoesNotExist:
#         return False
#
#     new_file = instance.image
#     if not old_file == new_file:
#         if os.path.isfile(old_file.path):
#             os.remove(old_file.path)
