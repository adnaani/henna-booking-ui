import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-select-row',
  standalone: true,
  imports: [NgClass],
  templateUrl: './select-row.component.html',
  styleUrls: ['./select-row.component.css'],
})
export class SelectRowComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() meta?: string;
  @Input() selected = false;

  @Output() selectionChange = new EventEmitter<void>();

  onClick(): void {
    this.selectionChange.emit();
  }
}
