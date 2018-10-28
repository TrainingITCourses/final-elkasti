import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { CambiarTitulo } from 'src/app/core/store/barra-estado/barra-estado.actions';
import { GlobalState } from 'src/app/core/store';
import { Store } from '@ngrx/store';

import * as moment from 'moment';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-lanzamiento-detalle',
  templateUrl: './lanzamiento-detalle.component.html',
  styleUrls: ['./lanzamiento-detalle.component.css']
})
export class LanzamientoDetalleComponent implements OnInit {
  @Input() public launch;

  constructor(
    private store: Store<GlobalState>,
  ) { }

  formatearFecha(fecha) {
    return moment(fecha).format('DD/MM/YYYY HH:mm');
  }

  ngOnInit() {
    this.store.dispatch(new CambiarTitulo(this.launch.name));
  }

}
