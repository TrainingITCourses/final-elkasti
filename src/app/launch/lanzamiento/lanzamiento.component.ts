import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { GlobalState } from 'src/app/core/store';
import { CambiarTitulo } from 'src/app/core/store/barra-estado/barra-estado.actions';

@Component({
  selector: 'app-lanzamiento',
  templateUrl: './lanzamiento.component.html',
  styleUrls: ['./lanzamiento.component.css']
})
export class LanzamientoComponent implements OnInit {

  private launchId: number;
  public launch;
  public nombre;

  constructor(
    private route: ActivatedRoute,
    private store: Store<GlobalState>,
    private cdRef: ChangeDetectorRef

  ) { }

  ngOnInit() {

    this.nombre = 'detalle';

    this.launchId = Number(this.route.snapshot.params['id']);

    this.store.subscribe((s: any) => {
      const launches = s.launch.launches.filter(launch =>
        launch.id === this.launchId
      );
      this.launch = launches[0];
    });

  }

}
