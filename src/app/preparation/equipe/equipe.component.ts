import { Component, OnInit } from '@angular/core';
import { Equipe } from './models/equipe.model';
import { Subscription, Observable } from 'rxjs';

import * as fromPreparation from '../store/preparation.reducer';
import { Store } from '@ngrx/store';
import * as PreparationAction from '../store/preparation.actions';
import { LISTEQUIPE } from './models/list-equipe';
import { DetailComponent } from './detail/detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {
  equipe = LISTEQUIPE;
  budget: number;
  budgetSubscription: Subscription;


  constructor(private store: Store<fromPreparation.State>,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.importBudget();
  }

  importBudget() {
    this.budgetSubscription = this.store.select(fromPreparation.getBudget).subscribe(
      data => {this.budget = data; }
    );
  }

  detailMembreEquipe(equipe: Equipe) {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '270px',
      data: {
        nom: equipe.nom,
        prix: equipe.prix,
        capaciteTravail: equipe.capaciteTravail,
        capaciteOtage: equipe.capaciteOtage,
        capaciteArme: equipe.capaciteArme,
        capaciteColere: equipe.capaciteColere,
        capaciteAngoisse: equipe.capaciteAngoisse,
        capaciteNegociation: equipe.capaciteNegociation,
        capaciteNouvelleTechnologie: equipe.capaciteNegociation,
        capaciteExplosif: equipe.capaciteExplosif,
        etatDeFolie: equipe.etatDeFolie,
        etatDeSante: equipe.etatDeSante,
        optimiste: equipe.optimiste,
        image: equipe.image
      },
      position: {
        top: '-150px',
        left: '300px'
      }
    });
    dialogRef.beforeClosed();
  }

  ajoutEquipier(equipe) {
    console.log(equipe)
    this.store.dispatch(new PreparationAction.AddEquipe(equipe));
    this.store.dispatch(new PreparationAction.SetBudget(this.budget - equipe.prix))

  }

}
