import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { Equipe } from '../equipe/models/equipe.model';

import * as PreparationAction from './preparation.actions';
import * as fromApp from '../../store/app.reducer';
import { Arme } from '../arme/models/arme.model';
import { Objet } from '../objet/model/objet.model';

export interface PreparationState extends fromApp.AppState {
  preparation: State;
}

export interface State {
equipe: Equipe[];
arme: Arme[];
objet: Objet[];
budget: number;
}

export const initialState: State = {
equipe: [],
arme:[],
objet: [],
budget: 24000
};

export function preparationReducer(state = initialState, action: PreparationAction.PreparationAction): State {
  switch (action.type) {
    case (PreparationAction.SET_EQUIPE):
      return {
        ...state,
        equipe: [...action.payload]
      };
      case (PreparationAction.SET_ARME):
      return {
        ...state,
        arme: [...action.payload]
      };
      case (PreparationAction.SET_OBJET):
        return {
          ...state,
          objet: [...action.payload]
        };
      case (PreparationAction.SET_BUDGET):
        return {
          ...state,
          budget: action.payload
        };
    default:
      return state;
  }
}

export const getPreparationState = createFeatureSelector<State>('preparation');
export const getEquipe = createSelector(getPreparationState, (state: State) => state.equipe);
export const getArme = createSelector(getPreparationState, (state: State) => state.arme);
export const getObjet = createSelector(getPreparationState, (state: State) => state.objet);
export const getBudget = createSelector(getPreparationState, (state: State) => state.budget);
