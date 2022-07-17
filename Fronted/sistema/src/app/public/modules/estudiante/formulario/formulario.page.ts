import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BackendService } from 'src/app/public/service/backend.service';
import { ToastControllerService } from 'src/app/public/shared/ionic/toast-controller.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  @Input() titulo: string;
  @Input() datos: any;
  public formulario: FormGroup;
  private proceso: number;
  constructor(
    public modalController: ModalController,
    private backendService: BackendService,
    private toastController: ToastControllerService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.titulo)
    console.log(this.datos)
    this.estructura_formulario();
    if (this.datos) {
      this.proceso = 2;
      this.formulario.controls['codigo'].setValue(this.datos[0]);
      this.formulario.controls['nombres'].setValue(this.datos[1]);
      this.formulario.controls['apellidos'].setValue(this.datos[2]);
      this.formulario.controls['correo'].setValue(this.datos[3]);
      this.formulario.controls['edad'].setValue(this.datos[4]);
    }
    else {
      this.proceso = 1;
      this.formulario.controls['codigo'].setValue(0);
    }
  }

  public guardar() {
    console.log(this.formulario.value)
    this.backendService.ruta = 'proceso/' + this.proceso;
    this.backendService.json = this.formulario.value;
    this.backendService.postService().then(res => {
      this.toastController.mensaje = res.mensaje;
      if (res.ejecucion)
        this.toastController.toast_correcto();
      else
        this.toastController.toast_incorrecto();
      this.cerrar_modal();
    })

  }

  private estructura_formulario() {
    this.formulario = this.formBuilder.group({
      codigo: [''],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      edad: ['', Validators.required],
    });
  }

  public cerrar_modal() {
    this.formulario.reset();
    this.modalController.dismiss();
  }

}
