import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    !environment.production
      ? StoreDevtoolsModule.instrument()
      : [],
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // StoreModule.forFeature('state', fromState.reducers, { metaReducers: fromState.metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
