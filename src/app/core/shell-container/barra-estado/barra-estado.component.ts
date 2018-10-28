import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { GlobalState } from '../../store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-estado',
  templateUrl: './barra-estado.component.html',
  styleUrls: ['./barra-estado.component.css']
})
export class BarraEstadoComponent implements OnInit {
  @Input() public titulo;
  @Input() public numeroLanzamientos;

  verNumero = false;

  constructor(
    private store: Store<GlobalState>,
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngOnInit() {
    this.store.subscribe((s: any) => {
      console.log(s.barraEstado.titulo);
      this.titulo = s.barraEstado.titulo;
      if (this.titulo === 'Estados de lanzamientos') {
        this.verNumero = true;
      } else {
        this.verNumero = false;
      }

      this.numeroLanzamientos = s.launch.launches.length;
      this.cdRef.markForCheck();
    });
  }

  home() {
    this.router.navigate(['/']);
  }

}
