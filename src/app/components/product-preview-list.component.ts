import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../models';
import { ProductPreview } from './product-preview.component';

@Component({
  selector: 'product-preview-list',
  standalone: true,
  imports: [ProductPreview, NgFor],
  template: `
    <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li *ngFor="let product of products">
        <product-preview [product]="product"></product-preview>
      </li>
    </ul>
  `,
})
export class ProductPreviewList {
  @Input() products!: Product[];
}
