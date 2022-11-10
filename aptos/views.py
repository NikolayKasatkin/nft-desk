from django import forms
from django.shortcuts import render, redirect
from .forms import ImagesForm
from .models import ImagesAptos
from django.http import JsonResponse
from django.http import HttpResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import UpdateView
from django.urls import reverse_lazy
from datetime import datetime, date, time
import datetime as dt
import time
from django.shortcuts import redirect

@csrf_exempt
def index(request):
    error = ''
    images = ImagesAptos.objects.filter()
    form = ImagesForm()

    data = {
        'form': form,
        'error': error,
        'images': images,
    }

    start_datetime = dt.datetime(2022, 9, 9, 19, 00, 0, 0)
    current_datetime = datetime.now()
    dataGet = round(start_datetime.timestamp() - current_datetime.timestamp())

    # version = 0

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        # заполнение базы данных
        # if request.method == 'POST-DB':
        #     print('this work')
        #     for i in range(1, 5001):
        #         aptosImg = ImagesAptos(id_nft = i, image = 'images/green.png', description = '')
        #         aptosImg.save()
        #     print('Complete')

        if request.method == 'POST':
            idnft = str(request.body).split("'")[1]
            images_to_idnft = ImagesAptos.objects.get(id_nft = idnft).description
            images_idnft_to_idnft = ImagesAptos.objects.get(id_nft = idnft).id_nft
            dat = [images_to_idnft, images_idnft_to_idnft]
            return JsonResponse(dat, safe = False)

        if request.method == 'GET-TIME':
            dataGet = round(start_datetime.timestamp() - current_datetime.timestamp())
            return JsonResponse(dataGet, safe = False)

    if request.method == 'POST':
        form = ImagesForm(request.POST, request.FILES)
        id_json = int(form.data["id_nft"])
        old_image = ImagesAptos.objects.get(id_nft = id_json)
        form2 = ImagesForm(request.POST, request.FILES, instance=old_image)
        if form2.is_valid():
            form2.save()


    if dataGet <= 0:
        return render(request, 'aptos/index.html', data)
    else:
        return render(request, 'aptos/preloader.html')




class indexUpdateView(UpdateView):
    model = ImagesAptos
    form_class = ImagesForm
    template_name = 'aptos/index.html'
    success_url = reverse_lazy('')
    context_object_name = 'index'
