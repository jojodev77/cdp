import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AccueilComponent } from './core/accueil/accueil.component';


const routes: Routes = [
  {
    path: '', component: AccueilComponent
  },
  {
    path: 'preparatif',
    loadChildren: () => import('./preparation/preparation.module')
      .then(mod => mod.PreparationModule)
  },

  {
    path: 'game',
    loadChildren: () => import('./game/game.module')
      .then(mod => mod.GameModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
     {useHash: true, enableTracing: true}
     )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
