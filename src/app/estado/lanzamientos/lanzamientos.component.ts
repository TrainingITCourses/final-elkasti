import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { GlobalState } from 'src/app/core/store';
import { EstadoState } from 'src/app/core/store/estado/estado.reducer';
import { CambiarTitulo } from 'src/app/core/store/barra-estado/barra-estado.actions';


@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.css']
})
export class LanzamientosComponent implements OnInit {

  private statusId: number;
  private nombreEstado: string;
  public launches;

  constructor(
    private route: ActivatedRoute,
    private store: Store<GlobalState>,
  ) { }

  ngOnInit() {

    this.statusId = Number(this.route.snapshot.params['id']);

    this.store.subscribe(
      s => {
        const estado = s.estado.estados.filter(item => item.id === this.statusId);
        if (estado) {
          this.nombreEstado = estado[0].description;
        }
      }
    );

    this.lista('asc');

    this.store.dispatch(new CambiarTitulo(this.nombreEstado));

  }

  lista(orden: string) {

    this.store.subscribe((s: any) => {
      this.launches = s.launch.launches.filter(launch =>
        launch.status === this.statusId
      ).sort((a, b) => {
        if (a.isostart > b.isostart) {
          return orden === 'asc' ? 1 : -1;
        } else {
          return orden === 'asc' ? -1 : 1;
        }
      });
    });

  }

}
