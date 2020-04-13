import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PreparationService {
budget = 24000;

  constructor(private coockieService: CookieService) { }

  getBudgetInitial(): Observable<any> {
return this.budget as any;
  }

  getBudget(): Observable<any> {
    return this.coockieService.get('BUDGET') as any;
      }

  updateBudget(budgetAJour: any): Observable<any> {
    return  this.coockieService.set('BUDGET', budgetAJour.toString()) as any;
  }

  deleteBudget(): Observable<any> {
return this.coockieService.delete('BUDGET') as any;
  }
}
