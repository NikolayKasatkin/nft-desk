from django import forms
from django.shortcuts import render, redirect
from .forms import ImagesForm
from .models import Images
from django.http import JsonResponse
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import UpdateView
from django.urls import reverse_lazy
from datetime import datetime, date, time
import datetime as dt
import time

@csrf_exempt
def index(request):
    error = ''
    images = Images.objects.filter()
    form = ImagesForm()

    data = {
        'form': form,
        'error': error,
        'images': images,
    }

    start_datetime = dt.datetime(2022, 6, 25, 23, 25, 0, 0)
    current_datetime = datetime.now()
    if start_datetime > current_datetime:
        dataGet = start_datetime - current_datetime
        dataGet = dataGet.seconds
    elif start_datetime < current_datetime:
        dataGet = -1
    elif 0 > (start_datetime - current_datetime) < 1:
        dataGet = 0

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        if request.method == 'POST':
            idnft = str(request.body).split("'")[1]
            images_to_idnft = Images.objects.get(id_nft = idnft).description
            images_idnft_to_idnft = Images.objects.get(id_nft = idnft).id_nft
            dat = [images_to_idnft, images_idnft_to_idnft]
            return JsonResponse(dat, safe = False)

        if request.method == 'GET-TIME':
            return JsonResponse(dataGet, safe = False)


    if request.method == 'POST':
        form = ImagesForm(request.POST, request.FILES)
        id_json = int(form.data["id_nft"])
        old_image = Images.objects.get(id_nft = id_json)
        form2 = ImagesForm(request.POST, request.FILES, instance=old_image)
        if form2.is_valid():
            form2.save()


    if dataGet <= 0:
        return render(request, 'main/index.html', data)
    else:
        return render(request, 'main/preloader.html')






class indexUpdateView(UpdateView):
    model = Images
    form_class = ImagesForm
    template_name = 'main/index.html'
    success_url = reverse_lazy('')
    context_object_name = 'index'
