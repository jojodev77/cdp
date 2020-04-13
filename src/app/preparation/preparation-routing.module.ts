import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PreparationComponent } from './preparation/preparation.component';


const routes: Routes = [
  {
    path: '', component: PreparationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreparationRoutingModule { }
