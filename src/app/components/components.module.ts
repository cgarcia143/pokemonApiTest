import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { TableLettersComponent } from './table-letters/table-letters.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CabeceraComponent,
    CardDetailsComponent,
    TableLettersComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    CabeceraComponent,
    CardDetailsComponent,
    TableLettersComponent
  ]
})
export class ComponentsModule { }
