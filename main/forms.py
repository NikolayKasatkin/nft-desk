
from django import forms
from .models import Images
from django.forms import ModelForm, TextInput, Textarea, DateTimeInput, FileInput

class ImagesForm(ModelForm):
    class Meta:
        model = Images
        fields = ['id_nft', 'image', 'description']

        widgets = {
            "image": FileInput(attrs={
                'class': 'form-control'
            }),
            "description": Textarea(attrs={
                'class': 'form-control3'
            }),
            "id_nft": Textarea(attrs={
                'class': 'form-control2'
            })
        }
