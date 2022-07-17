import { Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BackendService } from '../../service/backend.service';
import { ToastControllerService } from '../../shared/ionic/toast-controller.service';
import { FormularioPage } from './formulario/formulario.page';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {
  public respuesta: any;
  constructor(
    public modalController: ModalController,
    private backendService: BackendService,
    private toastController: ToastControllerService,
  ) { }

  ngOnInit() {
    this.mostrar_datos();

  }
  doRefresh(event) {
    setTimeout(() => {
      this.mostrar_datos()
      event.target.complete();
    }, 2000);
  }
  private mostrar_datos() {
    this.backendService.ruta = 'mostrar';
    this.backendService.getService().then(res => {
      this.respuesta = res.resultado;
    });
  }

  public async modal(titulo: string, item: any) {
    const modal = await this.modalController.create({
      component: FormularioPage,
      componentProps: {
        titulo: titulo,
        datos: item
      }
    });
    modal.present();

  }

  public eliminar(item) {
    this.backendService.ruta = 'proceso/' + Number(3);
    this.backendService.json = {
      codigo: item[0],
      nombres: item[1],
      apellidos: item[2],
      correo: item[3],
      edad: item[4],
    };
    this.backendService.postService().then(res => {
      this.toastController.mensaje = res.mensaje;
      if (res.ejecucion)
        this.toastController.toast_correcto();
      else
        this.toastController.toast_incorrecto();
      setTimeout(() => { this.mostrar_datos(); }, 2000);
    })


  }



}
