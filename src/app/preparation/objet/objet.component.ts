import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import * as fromPreparation from '../store/preparation.reducer';
import { Store } from '@ngrx/store';
import * as PreparationAction from '../store/preparation.actions';
import { DetailComponent } from './detail/detail.component';
import { MatDialog } from '@angular/material/dialog';
import { LISTOBJET } from './model/liste-objet';
import { Objet } from './model/objet.model';

@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.scss']
})
export class ObjetComponent implements OnInit {
  objet = LISTOBJET;

  constructor(private store: Store<fromPreparation.State>,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.inititialiserListeObjet();
  }

  inititialiserListeObjet() {
  }

  detailMembreObjet(objet: Objet) {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '270px',
      data: {
        nom: objet.nom,
        prix: objet.prix,
        type: objet.type,
        nombreUtilisation: objet.nombreUtilisation,
        tempsUtilisation: objet.tempsUtilisation,
        image: objet.image
      },
      position: {
        top: '-150px',
        left: '300px'
      }
    });
    dialogRef.beforeClosed();
  }

}
