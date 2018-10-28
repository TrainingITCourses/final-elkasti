import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstadoRoutingModule } from './estado-routing.module';
import { LanzamientosComponent } from './lanzamientos/lanzamientos.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    EstadoRoutingModule,
    SharedModule,
  ],
  declarations: [
    LanzamientosComponent,
  ]
})
export class EstadoModule { }
