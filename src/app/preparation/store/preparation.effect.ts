import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import * as PreparationAction from './preparation.actions';



import {
    switchMap,
    map,
    mergeMap,
    tap
} from 'rxjs/operators';
import { EquipeService } from '../equipe/services/equipe.service';
import { Equipe } from '../equipe/models/equipe.model';
import { PreparationService } from '../preparation/preparation.service';


@Injectable()
export class PreparationEffects {



    constructor(private actions$: Actions,
                private equipeService: EquipeService,
                private preparationService: PreparationService) { }

    @Effect()
    getBudget = this.actions$
        .pipe(
            ofType(PreparationAction.GET_BUDGET),
            switchMap(
                (equipe: number) => this.preparationService.getBudgetInitial()
                    .pipe(
                        map(
                            (budget: number) => new PreparationAction.SetBudget(budget)
                        )
                    )
            )
        );


    @Effect()
    getEquipe = this.actions$
        .pipe(
            ofType(PreparationAction.GET_EQUIPE),
            switchMap(
                (equipe: Equipe) => this.equipeService.getEquipe()
                    .pipe(
                        map(
                            (equipe: Equipe[]) => new PreparationAction.SetEquipe(equipe)
                        )
                    )
            )
        );

        @Effect()
        addEquipe = this.actions$
            .pipe(
                ofType(PreparationAction.ADD_EQUIPE),
                switchMap(
                    (equipe: Equipe) => this.equipeService.addEquipe(equipe)
                        .pipe(
                            map(
                                (equipe: Equipe[]) => new PreparationAction.SetEquipe(equipe)
                            )
                        )
                )
            );



}
