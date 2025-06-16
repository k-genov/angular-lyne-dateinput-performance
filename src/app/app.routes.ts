import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'date-field',
    loadComponent: () => import('./date-field/date-field'),
  }, {
    path: 'text-field',
    loadComponent: () => import('./text-field/text-field'),
  },
];
