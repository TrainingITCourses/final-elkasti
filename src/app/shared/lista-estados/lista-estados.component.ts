import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/core/store';
import { CambiarTitulo } from 'src/app/core/store/barra-estado/barra-estado.actions';
import { Router } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-lista-estados',
  templateUrl: './lista-estados.component.html',
  styleUrls: ['./lista-estados.component.css']
})
export class ListaEstadosComponent implements OnInit {
  @Input() public estados;

  constructor(
    private store: Store<GlobalState>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.store.dispatch(new CambiarTitulo('Estados de lanzamientos'));
  }

  go(id) {
    this.router.navigate(['/estado/' + id]);
  }

}
