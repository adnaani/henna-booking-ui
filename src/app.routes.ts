import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app/public/public.routes').then((m) => m.PUBLIC_ROUTES),
  },
  // { path: 'admin', component: AdminHomeComponent },
];
