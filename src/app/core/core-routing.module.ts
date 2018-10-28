import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../home/home.module#HomeModule'
  },
  {
    path: 'launch/:id',
    loadChildren: '../launch/launch.module#LaunchModule'
  },
  {
    path: 'estado/:id',
    loadChildren: '../estado/estado.module#EstadoModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
