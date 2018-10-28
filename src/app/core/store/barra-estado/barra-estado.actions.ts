import { Action } from '@ngrx/store';



export enum BarraEstadoActionTypes {
  CambiarTitulo = '[BarraEstado] Cambiar titulo',
}

export class CambiarTitulo implements Action {
  readonly type = BarraEstadoActionTypes.CambiarTitulo;
  constructor(readonly payload: string) { }
}

export type BarraEstadoActions = CambiarTitulo;
