import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

type BadgeTone = 'success' | 'muted' | 'warning';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [NgClass],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
})
export class BadgeComponent {
  @Input() label = '';
  @Input() tone: BadgeTone = 'success';

  get toneClasses() {
    return {
      'bg-green-100 text-green-800': this.tone === 'success',
      'bg-gray-100 text-gray-800': this.tone === 'muted',
      'bg-amber-100 text-amber-800': this.tone === 'warning',
    };
  }
}
