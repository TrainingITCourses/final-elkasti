import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LanzamientoDetalleComponent } from './lanzamiento-detalle/lanzamiento-detalle.component';
import { ListaEstadosComponent } from './lista-estados/lista-estados.component';
import { ListaLanzamientosComponent } from './lista-lanzamientos/lista-lanzamientos.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LanzamientoDetalleComponent,
    ListaEstadosComponent,
    ListaLanzamientosComponent
  ],
  exports: [
    LanzamientoDetalleComponent,
    ListaEstadosComponent,
    ListaLanzamientosComponent,
    RouterModule,
  ]
})
export class SharedModule {}
