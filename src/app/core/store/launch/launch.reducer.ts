import { Action } from '@ngrx/store';
import { LaunchActionTypes, LaunchActions } from './launch.actions';


export interface LaunchState {
    launches: any[];
}

export const initialState: LaunchState = {
    launches: [],
};

export function reducer(state = initialState, action: LaunchActions): LaunchState {
    switch (action.type) {
        case LaunchActionTypes.LoadLaunchs:
            return state;
        case LaunchActionTypes.Loaded:
            return { launches: action.payload};
        case LaunchActionTypes.NotLoaded:
            return { launches: []};
        default:
            return state;
    }
}
