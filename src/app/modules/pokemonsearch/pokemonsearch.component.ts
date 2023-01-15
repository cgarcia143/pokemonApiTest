import { OnDestroy } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { IColumnas, IPokemon, IPokemones } from './pokemones.types';
import { PokemonsearchService } from './pokemonsearch.service';

@Component({
  selector: 'app-pokemonsearch',
  templateUrl: './pokemonsearch.component.html',
  styleUrls: ['./pokemonsearch.component.scss']
})
export class PokemonsearchComponent implements OnInit, OnDestroy, AfterViewInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  //Tables
  pokemonesDataSource: MatTableDataSource<any> = new MatTableDataSource();
  columnas: IColumnas[] = [
    {
        nombreCampo: 'name',
        nombreColumna: 'Nombre del pokemon'
    },
  ]
  displayedColumns: string[];

  //Details
  detalles = false;
  datos: any | undefined;

  //DATA BACK
  pokemonesList: IPokemones[];
  busquedadControl: FormControl;
  pokemonFilterList: Observable<any[]>;
  totalesPorLetra: any[] = [];

  public height: string = '200px';
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _pokemonesService: PokemonsearchService) {
    this.busquedadControl = new FormControl();
    this.pokemonFilterList = this.busquedadControl.valueChanges
      .pipe(
        startWith(''),
        map(pokemon => pokemon ? this.autoCompletePokemones(pokemon) : this.pokemonesList.slice())
    );
  }
  
  autoCompletePokemones(name: string) {
    return this.pokemonesList.filter(pokemon => 
      pokemon.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  ngAfterViewInit(): void {
    this.pokemonesDataSource.sort = this.sort;
    this.pokemonesDataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
      this._unsubscribeAll.next(null);
      this._unsubscribeAll.complete();
  }

  ngOnInit(): void {
    this._pokemonesService.pokemones$
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe((respuesta: IPokemones[]) => {
        this.pokemonesList = respuesta;
        const columnNames = this.columnas.map((tableColumn: any) => tableColumn.nombreCampo);
        this.displayedColumns = ['id',...columnNames,'detalles'];
        this.setTableDataSource(respuesta)

        this.conteo()
    });
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  busquedadFiltro(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.pokemonesDataSource.filter = filterValue;
  }

  setTableDataSource(data: any): void {
    this.pokemonesDataSource.data = [...data];
    this.pokemonesDataSource.paginator = this.paginator;
    this.pokemonesDataSource.sort = this.sort;
  }

  verDetalle(nombre: string): void{
    this._pokemonesService.obtenerPokemon(nombre)
    .subscribe(
      (res)=>{
        this.datos = {
          columnas: [ 
          {
            nombreCampo: res.name,
            nombreColumna: 'Nombre del pokemon'
          },
          {
            nombreCampo: res.weight,
            nombreColumna: 'Peso del pokemon'
          },
          {
            nombreCampo: res.height,
            nombreColumna: 'Estatura del pokemon'
          }],
          name: res.name,
          img: res.sprites.front_default
        }
        this.detalles = true
      }
    );

  }

  conteo (): void  {
    const alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

    alfabeto.forEach(element => {
      const total = this.pokemonesDataSource.data.filter(
        (res)=>{return res.name.includes(element,0) }
      ).length

      const result = {
        letra: element,
        total: total
      }

      this.totalesPorLetra.push(result);
      
    });

    console.log(this.totalesPorLetra)
  }

  

}
