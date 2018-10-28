import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LaunchActionTypes, Loaded, NotLoaded } from './launch.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { of } from 'rxjs';

@Injectable()
export class LaunchEffects {

  @Effect()
  public load$ = this.actions$
    .ofType(LaunchActionTypes.LoadLaunchs)
    .pipe(
      mergeMap(() =>
        this.api.getLaunches$()
          .pipe(
            map(launches =>
              new Loaded(launches),
              catchError(err => of(new NotLoaded(err.message)))
            )
          )
      )
    );

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) { }
}
