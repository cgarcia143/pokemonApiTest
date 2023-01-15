import { Component } from '@angular/core';
import { LoaderService } from './shared/Interceptor/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public _loader: LoaderService){

  }
  title = 'pokeapi';
}
