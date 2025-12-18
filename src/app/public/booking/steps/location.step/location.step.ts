import { Component, EventEmitter, Output, signal } from '@angular/core';
import { SelectRowComponent } from '../../../../ui/select-row/select-row.component';

@Component({
  selector: 'app-location-step',
  standalone: true,
  imports: [SelectRowComponent],
  templateUrl: './location.step.html',
  styleUrl: './location.step.css',
})
export class LocationStep {
  @Output() selected = new EventEmitter<'home' | 'mobile'>();
  selectedType = signal<'home' | 'mobile' | ''>('');

  select(type: 'home' | 'mobile') {
    this.selectedType.set(type);
    setTimeout(() => this.selected.emit(type), 150);
  }
}
