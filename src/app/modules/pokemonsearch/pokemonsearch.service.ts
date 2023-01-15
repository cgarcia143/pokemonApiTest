import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPokemones } from './pokemones.types';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsearchService {

  apiUrlBase = environment.apiUrlBase + '/pokemon/';
  _pokemones = new BehaviorSubject<IPokemones[]>([]);

  constructor(
    private _httpClient: HttpClient
  ) { }

  get pokemones$(): Observable<IPokemones[]> {
    return this._pokemones.asObservable();
  }

  obtenerPokemonesApi(url: string): Observable<any> {
    return this._httpClient.get(url).pipe(
        map((respuesta: any) => {
            this._pokemones.next(respuesta.results);
            return respuesta;
        })
    );
  }

  obtenerPokemon(nombre: string): Observable<any> {
    return this._httpClient.get(this.apiUrlBase + nombre).pipe(
        map((respuesta: any) => {
            return respuesta;
        })
    );
  }

  
}
