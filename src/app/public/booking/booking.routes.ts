import { Routes } from '@angular/router';
import { BookingPage } from './booking.page';

export const BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: BookingPage,
    // children: [
    //   { path: '', redirectTo: 'location', pathMatch: 'full' },
    //   {
    //     path: 'location',
    //     loadComponent: () =>
    //       import('./steps/location.step/location.step').then((c) => c.LocationStep),
    //   },
    //   //   {
    //   //     path: 'group',
    //   //     loadComponent: () =>
    //   //       import('./steps/group/group.step')
    //   //         .then(c => c.GroupStep),
    //   //   },
    //   //   {
    //   //     path: 'services',
    //   //     loadComponent: () =>
    //   //       import('./steps/services/services.step')
    //   //         .then(c => c.ServicesStep),
    //   //   },
    //   //   {
    //   //     path: 'time',
    //   //     loadComponent: () =>
    //   //       import('./steps/time/time.step')
    //   //         .then(c => c.TimeStep),
    //   //   },
    //   //   {
    //   //     path: 'confirm',
    //   //     loadComponent: () =>
    //   //       import('./steps/confirm/confirm.step')
    //   //         .then(c => c.ConfirmStep),
    //   //   },
    // ],
  },
];
