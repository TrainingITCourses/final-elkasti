import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromLaunch from './launch/launch.reducer';
import * as fromBarraEstado from './barra-estado/barra-estado.reducer';
import * as fromEstado from './estado/estado.reducer';

export interface GlobalState {

  launch: fromLaunch.LaunchState;
  barraEstado: fromBarraEstado.BarraEstadoState;
  estado: fromEstado.EstadoState;
}

export const reducers: ActionReducerMap<GlobalState> = {

  launch: fromLaunch.reducer,
  barraEstado: fromBarraEstado.reducer,
  estado: fromEstado.reducer,
};

export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : [];
