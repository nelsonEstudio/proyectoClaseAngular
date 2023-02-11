import { Component } from '@angular/core';
import { TarjetainformacionService } from '../services/tarjetainformacion.service';

@Component({
  selector: 'app-card-vehiculo',
  templateUrl: './card-vehiculo.component.html',
  styleUrls: ['./card-vehiculo.component.css']
})
export class CardVehiculoComponent {
vehiculos: any;  //variable de instancia

constructor (private infoVehiculo:TarjetainformacionService) { 
  this.vehiculos=infoVehiculo.getVehiculos();
  
 }

}
