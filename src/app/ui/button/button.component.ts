import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled = false;
  @Input() loading = false;

  get variantClasses() {
    return {
      // Primary – accent (Rose Nude)
      'bg-accent text-charcoal hover:bg-nude focus:ring-accent': this.variant === 'primary',

      // Secondary – nude
      'bg-nude text-charcoal hover:bg-taupe focus:ring-taupe': this.variant === 'secondary',

      // Danger – admin destructive
      'bg-charcoal text-white hover:bg-black focus:ring-charcoal': this.variant === 'danger',
    };
  }
}
