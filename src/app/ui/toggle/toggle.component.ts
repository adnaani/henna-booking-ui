import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent {
  private static nextId = 0;
  toggleId = `app-toggle-${++ToggleComponent.nextId}`;
  @Input() label = '';
  @Input() checked = false;
  @Input() disabled = false;
  @Output() changed = new EventEmitter<boolean>();

  onToggle(value: boolean): void {
    this.changed.emit(value);
  }
}
