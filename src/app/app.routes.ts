import { Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas'; // <-- LE SACAMOS EL '.ts' AL FINAL
import { AutosComponent } from './components/autos/autos';
import { ConversorComponent } from './components/conversor/conversor';
import { TextoVozComponent } from './components/texto-voz/texto-voz';
import { ValorantComponent } from './components/api-valorant/api-valorant'; // Tu ruta al componente

export const routes: Routes = [
  // Ruta por defecto (cuando abrís la app)
  { path: '', redirectTo: 'conversor', pathMatch: 'full' }, 
  
  // Mapeo de los links de tu navbar
  { path: 'conversor', component: ConversorComponent },
  { path: 'texto-voz', component: TextoVozComponent },
  { path: 'api-valorant', component: ValorantComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'autos', component: AutosComponent },
  { path: '', redirectTo: '/peliculas', pathMatch: 'full' }
];
  // Comodín por si escriben cualquier cosa
