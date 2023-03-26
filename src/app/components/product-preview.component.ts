import { Component, Input } from '@angular/core';
import { Product } from '../models';

@Component({
  selector: 'product-preview',
  standalone: true,
  imports: [],
  template: `
    <a href="#" class="group block overflow-hidden">
      <img
        [src]="images[0]"
        [alt]="images[0]"
        class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
      />

      <div class="relative bg-white pt-3">
        <h3
          class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
        >
          {{ title }}
        </h3>

        <p class="mt-2">
          <span class="sr-only"> Regular Price </span>

          <span class="tracking-wider text-gray-900"> £{{ price }} GBP </span>
        </p>
      </div>
    </a>
  `,
})
export class ProductPreview {
  @Input() product!: Product;

  get images() {
    return this.product.images;
  }

  get title() {
    return this.product.title;
  }

  get price() {
    return this.product.price;
  }
}
