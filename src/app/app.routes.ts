import { Routes } from '@angular/router';
import { Overview } from './pages/overview/overview';
import { Results } from './pages/results/results';

export const routes: Routes = [
  { path: '', component: Overview },
  { path: 'results/:link', component: Results },
  { path: '**', redirectTo: '' },
];
