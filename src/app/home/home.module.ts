import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstadosComponent } from './estados/estados.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  declarations: [EstadosComponent]
})
export class HomeModule {}
