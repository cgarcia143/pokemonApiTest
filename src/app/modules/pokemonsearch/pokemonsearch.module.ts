import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { PokemonsearchRoutingModule } from './pokemonsearch-routing.module';
import { PokemonsearchComponent } from './pokemonsearch.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PokemonsearchComponent
  ],
  imports: [
    MatMenuModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatButtonModule,
    ScrollingModule,
    MatAutocompleteModule,
    CommonModule,
    PokemonsearchRoutingModule,
    SharedModule,
    MatIconModule
    
  ]
})
export class PokemonsearchModule { }
