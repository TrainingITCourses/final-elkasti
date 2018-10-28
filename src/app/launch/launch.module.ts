import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LaunchRoutingModule } from './launch-routing.module';
import { LanzamientoComponent } from './lanzamiento/lanzamiento.component';

@NgModule({
  imports: [CommonModule, LaunchRoutingModule, SharedModule],
  declarations: [LanzamientoComponent]
})
export class LaunchModule {}
