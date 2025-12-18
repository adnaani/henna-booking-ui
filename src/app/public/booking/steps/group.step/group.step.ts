import { Component, EventEmitter, Output, signal } from '@angular/core';
import { SelectRowComponent } from '../../../../ui/select-row/select-row.component';

@Component({
  selector: 'app-group-step',
  standalone: true,
  imports: [SelectRowComponent],
  templateUrl: './group.step.html',
  styleUrl: './group.step.css',
})
export class GroupStep {
  @Output() selected = new EventEmitter<'solo' | 'group'>();
  selectedType = signal<'solo' | 'group' | ''>('');

  select(type: 'solo' | 'group') {
    this.selectedType.set(type);
    setTimeout(() => this.selected.emit(type), 150);
  }
}
