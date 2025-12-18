import { Component, signal } from '@angular/core';
import { LocationStep } from './steps/location.step/location.step';
import { GroupStep } from './steps/group.step/group.step';
import { StepTransitionComponent } from '../../shared/step-transition/step-transition.component';

type BookingStep = 'location' | 'group';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking.page.html',
  imports: [LocationStep, GroupStep, StepTransitionComponent],
  styleUrl: './booking.page.css',
})
export class BookingPage {
  step = signal<BookingStep>('location');

  goTo(step: BookingStep) {
    this.step.set(step);
  }

  onLocationSelected(value: 'home' | 'mobile') {
    console.log('Location chosen:', value);
  }

  onGroupType(value: 'solo' | 'group') {
    console.log('Group type:', value);
  }
}
