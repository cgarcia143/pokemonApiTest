import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-letters',
  templateUrl: './table-letters.component.html',
  styleUrls: ['./table-letters.component.scss']
})
export class TableLettersComponent implements OnInit {
  
  @Input() datos: any | []
  constructor() { }

  ngOnInit(): void {
  }

}
