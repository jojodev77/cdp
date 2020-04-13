/* Dépendences ngRx */
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromCore from '../core/store/core.reducer';

export interface AppState {
  auth: fromCore.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromCore.CoreReducers
};

export const getStateGameState = createFeatureSelector<fromCore.State>('auth');
export const getStateGame = createSelector(getStateGameState, fromCore.getIsStateGame);
