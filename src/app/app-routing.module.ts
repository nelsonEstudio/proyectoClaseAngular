import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescripcionVehiculoComponent } from './descripcion-vehiculo/descripcion-vehiculo.component';
import { FormReactivoIngresaComponent } from './form-reactivo-ingresa/form-reactivo-ingresa.component';
import { FormReactivoRegistroComponent } from './form-reactivo-registro/form-reactivo-registro.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'inicio',
    component: HomeComponent    
  },
  {
    path: 'contacto',
    component: DescripcionVehiculoComponent  //ejemplo de componente para la ruta
  }, 
  {
    path: 'ingresa',
    component: FormReactivoIngresaComponent
  },
  {
    path: 'registro',
    component: FormReactivoRegistroComponent

  },
  {
    path: '**',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
