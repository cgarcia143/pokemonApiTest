import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'pokemones'},
  {path: 'pokemones', loadChildren: () => import('src/app/modules/pokemonsearch/pokemonsearch.module').then(m => m.PokemonsearchModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
