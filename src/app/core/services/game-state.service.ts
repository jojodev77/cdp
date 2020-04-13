import { Injectable } from '@angular/core';


import {CookieService} from 'ngx-cookie-service';
import { User } from '../accueil/models/equipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {

user: User;

  constructor(private coockieService: CookieService) { }

  getStateGame(user: any): Observable<any> {
   const data =  this.coockieService.get('user');
   return data as any;
  }

  newStateGame() {
    this.coockieService.set('user',
     this.user.nom,
     this.user.dateDeDebut,
     this.user.etat.toString()
     );
  }

  deleteStateGame(): Observable<any> {
   return  this.coockieService.delete('user') as any;
  }
}
