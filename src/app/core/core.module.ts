
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { CoreRoutingModule } from './core-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { metaReducers, reducers } from './store';

import { ShellContainerComponent } from './shell-container/shell-container.component';

import { EstadoEffects } from './store/estado/estado.effects';
import { LaunchEffects } from './store/launch/launch.effects';
import { BarraEstadoEffects } from './store/barra-estado/barra-estado.effects';
import { BarraEstadoComponent } from './shell-container/barra-estado/barra-estado.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    EffectsModule.forRoot([EstadoEffects, LaunchEffects, BarraEstadoEffects])
  ],
  declarations: [ShellContainerComponent, BarraEstadoComponent],
  exports: [ShellContainerComponent]
})
export class CoreModule { }
