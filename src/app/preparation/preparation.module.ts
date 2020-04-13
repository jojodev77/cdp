import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreparationRoutingModule } from './preparation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EquipeComponent } from './equipe/equipe.component';
import { OtageComponent } from './otage/otage.component';
import { ArmeComponent } from './arme/arme.component';
import { ObjetComponent } from './objet/objet.component';
import { PreparationComponent } from './preparation/preparation.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { preparationReducer } from './store/preparation.reducer';
import { PreparationEffects } from './store/preparation.effect';
import { DetailComponent } from './equipe/detail/detail.component';


@NgModule({
  declarations: [EquipeComponent, OtageComponent,
     ArmeComponent, ObjetComponent, PreparationComponent,
      DetailComponent],
  imports: [
    CommonModule,
    PreparationRoutingModule,
    SharedModule,
    StoreModule.forFeature('preparation', preparationReducer),
    EffectsModule.forFeature([PreparationEffects]),
  ],
  entryComponents: [DetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class PreparationModule { }
