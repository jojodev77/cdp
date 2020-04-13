import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Equipe } from '../models/equipe.model';
import { LISTEQUIPE } from '../models/list-equipe';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  equipe: Equipe[] = [];

  constructor(private http: HttpClient,
              private coockieService: CookieService) {

  }

  public getJsonData(filePath: string) {
    return this.http.get(filePath);
  }

  addEquipe(equipes: any): Observable<any> {
    // tslint:disable-next-line: no-unused-expression
    this.equipe.push(equipes.payload);
    console.log(this.equipe)
    return this.coockieService.set('EQUIPE', JSON.stringify(this.equipe) ) as any;
  }

  getEquipe(): Observable<any> {
return this.coockieService.get('EQUIPE') as any;
  }
}
