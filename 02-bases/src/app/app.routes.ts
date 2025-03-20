import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
export const routes: Routes = [
  {
    path: '', // dirección a la página principal
    component: CounterPageComponent,
  },
  {
    path: 'hero', // drecciona a la página de héroes
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  {
    path: '**', // si la póagina no existe, redirecciona a la página principal
    redirectTo: '',
  },
];
