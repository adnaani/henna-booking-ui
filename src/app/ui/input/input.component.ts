import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  private static nextId = 0;
  inputId = `app-input-${++InputComponent.nextId}`;
  @Input() label?: string;
  @Input() type = 'text';
  @Input() value = '';
  @Input() placeholder = '';
  @Input() error?: string;
}
