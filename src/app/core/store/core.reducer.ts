import { Action, createReducer, on } from '@ngrx/store';
import * as CoreAction from './core.actions';
import { User } from '../accueil/models/equipe.model';

export const coreFeatureKey = 'core';

export interface State {
  user: User;
}

export const initialState: State = {
  user: null
};


export function CoreReducers(state = initialState, action: CoreAction.CoreAction) {
  switch (action.type) {
    case (CoreAction.GET_STATE_GAME):
      return {
        ...state,
        user: null
      };
      break;

    default:
      break;
  }
}

export const getIsStateGame = (state: State) => state.user;
