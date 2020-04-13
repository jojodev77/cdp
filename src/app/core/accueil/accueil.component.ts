import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/equipe.model';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  user: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newGame() {
this.router.navigate(['preparatif']);
  }

  repriseGame() {
if (this.user.etat === true) {
  this.router.navigate(['game']);
}
  }

}
