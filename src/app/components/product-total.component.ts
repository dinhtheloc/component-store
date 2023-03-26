import { Component, Input } from '@angular/core';
import { Product } from '../models';

@Component({
  selector: 'product-total',
  standalone: true,
  template: `
    <p class="text-sm text-gray-500">
      Showing <span> {{ number }} </span> of {{ totalProduct }}
    </p>
  `,
})
export class ProductTotalComponent {
  @Input() number!: number;
  @Input() totalProduct!: number;
}
