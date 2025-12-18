import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  standalone: true,
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent {
  @Input() amount = 0;
  @Input() currency = '£';

  get formattedAmount(): string {
    if (Number.isNaN(Number(this.amount))) {
      return `${this.amount}`;
    }
    return Number(this.amount).toLocaleString('en-GB', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
}
