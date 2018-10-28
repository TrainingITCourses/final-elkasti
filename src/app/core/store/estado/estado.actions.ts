import { Action } from '@ngrx/store';

export enum EstadoActionTypes {
  Cargar = '[Estado] Cargar',
  Cargados = '[Estado] Cargados',
  NoCargados = '[Estado] No cargados',
}

export class Cargar implements Action {
  readonly type = EstadoActionTypes.Cargar;
}

export class Cargados implements Action {
  readonly type = EstadoActionTypes.Cargados;
  constructor(readonly payload: any[]) { }
}

export class NoCargados implements Action {
  readonly type = EstadoActionTypes.NoCargados;
  constructor(readonly payload: string) { }
}

export type EstadoActions =
Cargar | Cargados | NoCargados;
