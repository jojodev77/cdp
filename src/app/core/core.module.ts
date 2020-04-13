import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';


import { SharedModule } from '../shared/shared.module';


import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    CookieService
  ]
})
export class CoreModule { }
