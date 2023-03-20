import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cronometro';
  coso2 = 'Hola como estas';
  numero: number = 0;
  base: number = 5;

  agregar(valor: number){
    this.numero+=valor;
  }
}
