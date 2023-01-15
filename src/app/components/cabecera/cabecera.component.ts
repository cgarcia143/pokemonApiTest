import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  @Input() titulo: string | undefined;
  @Input() color: string = 'red-500';

  constructor(
    private elementRef: ElementRef,
    public renderer: Renderer2
  ){}

  ngOnInit(): void {
    const part = this.elementRef.nativeElement.querySelector('div');
    this.renderer.addClass(part,'bg-'+this.color);
  }
}
