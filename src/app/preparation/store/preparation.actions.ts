import { Equipe } from '../equipe/models/equipe.model';
import { Objet } from '../objet/model/objet.model';
import { Arme } from '../arme/models/arme.model';

/* Budget */
export const GET_BUDGET = 'GET_BUDGET';
export const SET_BUDGET = 'SET_BUDGET';
export const UPDATE_BUDGET = 'UPDATE_BUDGET';


export class GetBudget {
  readonly type = GET_BUDGET;
}

export class SetBudget {
  readonly type = SET_BUDGET;
  constructor(public payload: number) {}
}

export class UpdateBudget {
  readonly type = UPDATE_BUDGET;
  constructor(public payload: number) {}
}

/* Arme */
export const ADD_ARME = 'ADD_ARME';
export const GET_ARME = 'GET_ARME';
export const SET_ARME = 'SET_ARME';
export const UPDATE_ARME = 'UPDATE_ARME';

export class AddArme {
  readonly type = ADD_ARME;
  constructor(public payload: Arme[]) {}
}

export class GetArme {
  readonly type = GET_ARME;
}

export class SetArme {
  readonly type = SET_ARME;
  constructor(public payload: Arme[]) {}
}

export class UpdateArme {
  readonly type = UPDATE_ARME;
  constructor(public payload: Arme[]) {}
}

/* Objet */
export const ADD_OBJET = 'ADD_OBJET';
export const GET_OBJET = 'GET_OBJET';
export const SET_OBJET = 'SET_OBJET';
export const UPDATE_OBJET = 'UPDATE_OBJET';

export class AddObjet {
  readonly type = ADD_OBJET;
  constructor(public payload: Objet[]) {}
}

export class GetObjet {
  readonly type = GET_OBJET;
}

export class SetObjet {
  readonly type = SET_OBJET;
  constructor(public payload: Objet[]) {}
}

export class UpdateObjet {
  readonly type = UPDATE_OBJET;
  constructor(public payload: Objet[]) {}
}

/* Equipe */
export const ADD_EQUIPE = 'ADD_EQUIPE';
export const GET_EQUIPE = 'GET_EQUIPE';
export const SET_EQUIPE = 'SET_EQUIPE';
export const UPDATE_EQUIPE = 'UPDATE_EQUIPE';

export class AddEquipe {
  readonly type = ADD_EQUIPE;
  constructor(public payload: Equipe[]) {}
}

export class GetEquipe {
  readonly type = GET_EQUIPE;
}

export class SetEquipe {
  readonly type = SET_EQUIPE;
  constructor(public payload: Equipe[]) {}
}

export class UpdateEquipe {
  readonly type = UPDATE_EQUIPE;
  constructor(public payload: Equipe[]) {}
}

export type PreparationAction =
GetBudget |
SetBudget |
UpdateBudget |
AddEquipe |
GetEquipe |
SetEquipe |
UpdateEquipe |
AddArme |
GetArme |
SetArme |
UpdateArme |
AddObjet |
GetObjet |
SetObjet |
UpdateObjet;




