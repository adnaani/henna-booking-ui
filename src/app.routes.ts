import { Routes } from '@angular/router';
import { PublicHomeComponent } from './app/public/public-home.component';
import { AdminHomeComponent } from './app/admin/admin-home.component';

export const routes: Routes = [
  { path: '', component: PublicHomeComponent },
  { path: 'admin', component: AdminHomeComponent },
];
