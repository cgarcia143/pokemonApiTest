import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonsearchService } from './pokemonsearch.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonsearchResolver implements Resolve<boolean> {
  apiUrlBase = environment.apiUrlBase + '/pokemon?offset=0&limit=1279';
  constructor(private _pokemonService: PokemonsearchService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    
    return this._pokemonService.obtenerPokemonesApi(this.apiUrlBase);
  }
}
