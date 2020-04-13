import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromPreparation from '../store/preparation.reducer';

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
  styleUrls: ['./preparation.component.scss']
})
export class PreparationComponent implements OnInit {
budget: number;
budgetSubscription: Subscription;

  constructor( private store: Store<fromPreparation.PreparationState>) { }

  ngOnInit(): void {
    this.budgetSubscription = this.store.select(fromPreparation.getBudget).subscribe(
      data => {this.budget = data; }
    );
  }

}
