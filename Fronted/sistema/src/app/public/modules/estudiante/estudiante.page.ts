import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormularioPage } from './formulario/formulario.page';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

  constructor(
    public modalController:ModalController
  ) { }

  ngOnInit() {
  }

  public async onAbrirModal(){
    const modal = await this.modalController.create({
      component: FormularioPage,
    });
    modal.present();

  }

}
