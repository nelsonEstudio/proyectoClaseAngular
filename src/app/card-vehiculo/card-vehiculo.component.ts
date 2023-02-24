import { Component } from '@angular/core';
import { TarjetainformacionService } from '../services/tarjetainformacion.service';

@Component({
  selector: 'app-card-vehiculo',
  templateUrl: './card-vehiculo.component.html',
  styleUrls: ['./card-vehiculo.component.css']
})
export class CardVehiculoComponent {
vehiculos: any;  //variable de instancia
datoBuscar: string='';
constructor (private infoVehiculo:TarjetainformacionService) {
   
  infoVehiculo.getVehiculos().subscribe(data=>{
    this.vehiculos=data
  })
  
 }
  busqueda(val:string):void{
    this.datoBuscar=val
  }

}
