import { templateJitUrl } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector: 'app-Heroe',
    templateUrl: 'Heroe.component.html'
})
export class HeroeComponent{
        nombre : string = 'Miles';
        edad   : number = 22;
        
        get nombreMayuscula(){
            return this.nombre.toUpperCase();
        }

        obtenerNombre(){
            return ' ${this.nombre} - $ {this.edad}'
        }
}