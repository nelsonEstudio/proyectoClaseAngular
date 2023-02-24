import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TarjetainformacionService {

  vehiculos = [{
                imagen: 'Mazda-6.png',
                titulo: "Mazda 6",
                precio: 150000000,
                ubicacion: "Bogotá, Cundinamarca",
                texto: "Vehículo familiar"
              },
              {
                imagen: 'Mazda-CX-3.png',
                titulo: "Mazda CX-3",
                precio: 50000000,
                ubicacion: "Zipaquirá, Cundinamarca",
                texto: "Vehículo familiar"
              },
              {
                imagen: 'Mazda-CX-30.png',
                titulo: "Mazda CX-30",
                precio: 120000000,
                ubicacion: "Cali, Valle",
                texto: "Vehículo familiar"
              }
              ]
  constructor() {   }
  getVehiculos () {return of(this.vehiculos)}       

  search(infoUsuario: string) {
    console.log(infoUsuario)
    return this.vehiculos.filter(resultado => resultado.titulo.includes(infoUsuario)).map(result => { 
      console.log({...result,show:true })
      return {...result,show:true }
     })
  }
}
