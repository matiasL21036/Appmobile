import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController);
  toastCtrl = inject(ToastController);
  router = inject(Router);

  // loading
  loading() {
    return this.loadingCtrl.create({ spinner: 'crescent' })
  }


  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();

  }

  // enrutar
  routerLink(url: string) {
    return this.router.navigateByUrl(url);
  }

  // guardar elemento en localstorage
  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }


  // obtener elemento desde localstorage
  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }





}