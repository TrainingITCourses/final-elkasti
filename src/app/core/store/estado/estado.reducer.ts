import { Action } from '@ngrx/store';
import { EstadoActionTypes, EstadoActions } from './estado.actions';


export interface EstadoState {
    estados: any[];
    mensaje: string;
}

export const initialState: EstadoState = {
    estados: [],
    mensaje: ''
};

export function reducer(state = initialState, action: EstadoActions): EstadoState {
    switch (action.type) {
        case EstadoActionTypes.Cargar:
            return state;
        case EstadoActionTypes.Cargados:
            return { estados: action.payload, mensaje: '' };
        case EstadoActionTypes.NoCargados:
            return { estados: [], mensaje: action.payload };
        default:
            return state;
    }
}
