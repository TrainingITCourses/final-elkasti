import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { EstadoActionTypes, Cargados, NoCargados } from './estado.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { of } from 'rxjs';

@Injectable()
export class EstadoEffects {

  @Effect()
  public cargar$ = this.actions$
    .ofType(EstadoActionTypes.Cargar)
    .pipe(
      mergeMap(() =>
        this.api
          .getEstados$()
          .pipe(
            map(estados => new Cargados(estados)),
            catchError(err => of(new NoCargados(err.message)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) { }
}
