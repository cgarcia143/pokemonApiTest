import { Component, Input, OnInit } from '@angular/core';
import { IColumnas } from 'src/app/modules/pokemonsearch/pokemones.types';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
  
  @Input() datos: any | [
      {
        nombreCampo: 'name',
        nombreColumna: 'Nombre del pokemon'
      },

      {
        nombreCampo: 'weight',
        nombreColumna: 'Peso'
      },

      {
        nombreCampo: 'height',
        nombreColumna: 'Estatura'
      },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
