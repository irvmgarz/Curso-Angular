import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  
  heroes: string[] = ['Spiderman','Hulk','IronMan','CA','Morales']

  heroeborrado: string|undefined ='';

  borrarHeroe(){
    this.heroeborrado = this.heroes.pop();
  }

}
