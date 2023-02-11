import { Component } from '@angular/core';
import { TarjetainformacionService } from '../services/tarjetainformacion.service';


@Component({
  selector: 'app-barra-buscar',
  templateUrl: './barra-buscar.component.html',
  styleUrls: ['./barra-buscar.component.css']
})
export class BarraBuscarComponent {
  valorIngresado!: string;
  constructor(private informacionTarjeta: TarjetainformacionService  ){
     
  }
  busqueda() {
    this.informacionTarjeta.search(this.valorIngresado)
   }
 
}
