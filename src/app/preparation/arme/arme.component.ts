import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import * as fromPreparation from '../store/preparation.reducer';
import { Store } from '@ngrx/store';
import * as PreparationAction from '../store/preparation.actions';
import { LISTARME } from './models/liste-arme';
import { DetailComponent } from './detail/detail.component';
import { MatDialog } from '@angular/material/dialog';
import { Arme } from './models/arme.model';

@Component({
  selector: 'app-arme',
  templateUrl: './arme.component.html',
  styleUrls: ['./arme.component.scss']
})
export class ArmeComponent implements OnInit {
arme = LISTARME;

  constructor(private store: Store<fromPreparation.State>,
    private dialog: MatDialog) { }

ngOnInit(): void {
this.inititialiserListeArme();
}

inititialiserListeArme() {
// this.store.dispatch(new PreparationAction.Getarme());
// this.armeSubscription = this.store.select(fromPreparation.getarme).subscribe(
//   data => { this.arme = data; }
// );
}

detailMembreArme(arme: Arme) {
const dialogRef = this.dialog.open(DetailComponent, {
width: '270px',
data: {
nom: arme.nom,
prix: arme.prix,
type: arme.type,
degats: arme.degats,
real: arme.real,
nombreUtilisation: arme.nombreUtilisation,
tempsUtilisation: arme.tempsUtilisation,
image: arme.image
},
position: {
top: '-150px',
left: '300px'
}
});
dialogRef.beforeClosed();
}

}
