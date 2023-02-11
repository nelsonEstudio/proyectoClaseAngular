/// <reference types="@angular/localize" />
import {bootstrapApplication} from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { CarouselPauseComponent } from './app/carousel-pause/carousel-pause.component';
import './polyfills';

//import {CarouselPauseComponent} from './app/carousel-pause';
/*
bootstrapApplication(CarouselPauseComponent)
.then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
})
.catch(err => console.error(err));
*/


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

