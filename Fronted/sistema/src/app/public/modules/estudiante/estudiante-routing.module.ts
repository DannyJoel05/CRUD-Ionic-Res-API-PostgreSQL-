import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudiantePage } from './estudiante.page';

const routes: Routes = [
  {
    path: '',
    component: EstudiantePage
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then( m => m.FormularioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudiantePageRoutingModule {}
