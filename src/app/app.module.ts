import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardVehiculoComponent } from './card-vehiculo/card-vehiculo.component';
import { BarraBuscarComponent } from './barra-buscar/barra-buscar.component';
import { FiltrarComponent } from './filtrar/filtrar.component';
import { FooterComponent } from './footer/footer.component';
import { CarruselFotosComponent } from './carrusel-fotos/carrusel-fotos.component';
import { CarouselPauseComponent } from './carousel-pause/carousel-pause.component';
import { DescripcionVehiculoComponent } from './descripcion-vehiculo/descripcion-vehiculo.component';
import { CaractVehiculoComponent } from './caract-vehiculo/caract-vehiculo.component';
import { CarddatosComponent } from './carddatos/carddatos.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { FormReactivoIngresaComponent } from './form-reactivo-ingresa/form-reactivo-ingresa.component';
import { FormReactivoRegistroComponent } from './form-reactivo-registro/form-reactivo-registro.component';
import { BuscarPipe } from './pipes/buscar.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CardVehiculoComponent,
        BarraBuscarComponent,
        FiltrarComponent,
        FooterComponent,
        CarruselFotosComponent,
        DescripcionVehiculoComponent,
        CarddatosComponent,
        HomeComponent,
        FormularioReactivoComponent,
        FormReactivoIngresaComponent,
        FormReactivoRegistroComponent,
        BuscarPipe,
    ],
    providers: [BuscarPipe], 
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselPauseComponent,
        CaractVehiculoComponent,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
