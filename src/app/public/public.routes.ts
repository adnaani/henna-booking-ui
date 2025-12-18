import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.routes').then((r) => r.BOOKING_ROUTES),
  },
];
