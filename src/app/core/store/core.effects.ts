import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as CoreAction from './core.actions';


import { GameStateService } from '../services/game-state.service';

import {
  switchMap,
  map,
  mergeMap,
  tap
} from 'rxjs/operators';
import { User } from '../accueil/models/equipe.model';

@Injectable()
export class CoreEffects {



  constructor(private actions$: Actions,
              private gameStateService: GameStateService) { }

  @Effect()
  fetchStateGame = this.actions$
    .pipe(
      ofType(CoreAction.GET_STATE_GAME),
      switchMap(
        (user: User) => this.gameStateService.getStateGame(user)
          .pipe(
            map(
              (user: User) => new CoreAction.SetStateGame(user)
            )
          )
      )
    );

    @Effect()
  deleteStateGame = this.actions$
    .pipe(
      ofType(CoreAction.DELETE_STATE_GAME),
      switchMap(
        (user: any) => this.gameStateService.deleteStateGame()
          .pipe(
            map(
              (user: User) => new CoreAction.SetStateGame(user)
            )
          )
      )
    );

}
