import { Action } from '@ngrx/store';

import { User } from '../accueil/models/equipe.model';

export const GET_STATE_GAME = 'GET_STATE_GAME';
export const SET_STATE_GAME = 'SET_STATE_GAME';
export const DELETE_STATE_GAME = 'DELETE_STATE_GAME';

export class GetStateGame implements Action {
    readonly type = GET_STATE_GAME;
}

export class SetStateGame implements Action {
    constructor(public payload: User) {}
    readonly type = GET_STATE_GAME;
}

export class DeleteStateGame implements Action {
    readonly type = GET_STATE_GAME;
}

export type CoreAction =
    GetStateGame |
    SetStateGame |
    DeleteStateGame;

