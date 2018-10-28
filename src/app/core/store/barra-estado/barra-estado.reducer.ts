import { BarraEstadoActionTypes, BarraEstadoActions } from './barra-estado.actions';

export interface BarraEstadoState {
  titulo: string;
}

export const initialState: BarraEstadoState = {
  titulo: '',
};

export function reducer(state = initialState, action: BarraEstadoActions): BarraEstadoState {
  switch (action.type) {
    case BarraEstadoActionTypes.CambiarTitulo:
      state.titulo = action.payload;
      return state;
    default:
      return state;
  }
}
