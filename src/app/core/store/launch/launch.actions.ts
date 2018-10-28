import { Action } from '@ngrx/store';

export enum LaunchActionTypes {
  LoadLaunchs = '[Launch] Load Launchs',
  Loaded = '[Launch] Loaded Launchs',
  NotLoaded = '[Launch] Not Loaded',
}

export class LoadLaunchs implements Action {
  readonly type = LaunchActionTypes.LoadLaunchs;
}

export class Loaded implements Action {
  readonly type = LaunchActionTypes.Loaded;
  constructor(readonly payload: any[]) { }
}

export class NotLoaded implements Action {
  readonly type = LaunchActionTypes.NotLoaded;
  constructor(readonly payload: string) { }
}


export class PayloadFiltered {
  launches: any[];
  launchesFiltered: any[];
}


export type LaunchActions = LoadLaunchs | Loaded | NotLoaded;
