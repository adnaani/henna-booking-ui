import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'ui-input',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() label?: string;
  @Input() type = 'text';
  @Input() value = '';
  @Input() placeholder = '';
  @Input() error?: string;
}
