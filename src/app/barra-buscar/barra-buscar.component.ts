import { Component, EventEmitter, Output } from '@angular/core';
import { TarjetainformacionService } from '../services/tarjetainformacion.service';


@Component({
  selector: 'app-barra-buscar',
  templateUrl: './barra-buscar.component.html',
  styleUrls: ['./barra-buscar.component.css']
})
export class BarraBuscarComponent {
  valorIngresado!: string;
  /*constructor(private informacionTarjeta: TarjetainformacionService  )*/
  constructor(){
     
  }
  @Output() search:EventEmitter<string>=new EventEmitter<string>();


 /* busqueda() {
    this.informacionTarjeta.search(this.valorIngresado)
   }*/
 
}
