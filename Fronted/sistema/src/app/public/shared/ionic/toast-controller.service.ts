import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastControllerService {
  public mensaje:string;
  constructor(
    public toastController:ToastController
  ) { }

  public async toast_correcto(){
    const toast = await this.toastController.create({
      header:'Exito..',
      message: this.mensaje,
      color:'success',
      icon:'checkmark-done-outline', 
      duration: 2000
    });
    toast.present();
  }
  public async toast_incorrecto(){
    const toast = await this.toastController.create({
      header:'Error..',
      message: this.mensaje,
      color:'danger',
      icon:'close-outline', 
      duration: 2000
    });
    toast.present();
  }


}
