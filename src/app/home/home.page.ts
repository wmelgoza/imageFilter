import { Component } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filterOptions = [
    { name: 'Normal', value: ''},
    { name: 'Sepia', value: 'sepia'},
    { name: 'Blue Monotone', value: 'blue_monotone'},
    { name: 'Violent Tomato', value: 'violent_tomato'},
    { name: 'Grey', value: 'greyscale'},
    { name: 'Brightness', value: 'brightness'},
    { name: 'Saturation', value: 'saturation'},
    { name: 'Contrast', value: 'contrast'},
    { name: 'Hue', value: 'hue'},
    { name: 'Cookie', value: 'cookie'},
    { name: 'Vintage', value: 'vintage'},
    { name: 'Koda', value: 'koda'},
    { name: 'Technicolor', value: 'technicolor'},
    { name: 'Polaroid', value: 'polaroid'},
    { name: 'Bgr', value: 'bgr'},
  ];

  slideOpts = {
    slidesPerView: 3.5,
    spaceBetween: 5,
    slidesOffsetBefore: 20,
    freeMode: true
  };
  
}