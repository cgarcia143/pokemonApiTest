import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsearchComponent } from './pokemonsearch.component';
import { PokemonsearchResolver } from './pokemonsearch.resolver';

const routes: Routes = [
  {
    path     : '',
    component: PokemonsearchComponent,
    resolve: [PokemonsearchResolver]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsearchRoutingModule { }
