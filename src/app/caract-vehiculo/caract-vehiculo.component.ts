import { Component } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';

interface Vehiculo {
	marca: string;
	modelo: string;
	year: number;
	version: string;
  color: string;
  tipoCombustible: string;
  puertas: number;
  transmision: string;
  motor: number;
  tipoCarroceria: string;
  kilometros: number;
}

const VEHICULOS: Vehiculo[] = [
	{
	marca: 'Mazda',
	modelo: '6',
	year: 2023,
	version: 'Berlina',
  color: 'Azul',
  tipoCombustible: 'Gasolina',
  puertas: 5,
  transmision: 'Mecanica',
  motor: 1.6,
  tipoCarroceria: 'Sedán',
  kilometros: 0
	},
	{
    marca: 'Mazda',
    modelo: 'CX-3',
    year: 2023,
    version: 'Hatchback',
    color: 'Blanco',
    tipoCombustible: 'Gasolina',
    puertas: 5,
    transmision: 'Mecanica',
    motor: 1.8,
    tipoCarroceria: 'Hatchback',
    kilometros: 0
  },
	{
    marca: 'Mazda',
    modelo: 'CX-30',
    year: 2023,
    version: 'Hatchback',
    color: 'Plomo',
    tipoCombustible: 'Gasolina',
    puertas: 5,
    transmision: 'Mecanica',
    motor: 1.8,
    tipoCarroceria: 'Hatchback',
    kilometros: 0
  },
];


@Component({
  selector: 'app-caract-vehiculo',
  standalone: true,
  imports: [NgFor, DecimalPipe],
  templateUrl: './caract-vehiculo.component.html',
  styleUrls: ['./caract-vehiculo.component.css']
})
export class CaractVehiculoComponent {
  vehiculos = VEHICULOS;
}

