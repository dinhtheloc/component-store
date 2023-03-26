import { Component, inject } from '@angular/core';
import { provideComponentStore } from '@ngrx/component-store';
import { ProductSearchStore } from './product-search.store';

@Component({
  selector: 'product-search',
  standalone: true,
  imports: [],
  providers: [provideComponentStore(ProductSearchStore)],
  template: `
    <div class="grid grid-cols-6 gap-6 w-96">
      <div class="col-span-6">
        <label for="Email" class="block text-sm font-medium text-gray-700">
          Product name
        </label>

        <input
          type="text"
          (keyup)="onSearch($event)"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>
    </div>
  `,
})
export class ProductSearchComponent {
  private readonly productSearchStore = inject(ProductSearchStore);
  readonly vm$ = this.productSearchStore.vm$;

  onSearch(event: KeyboardEvent): void {
    this.productSearchStore.setSearchTerm(
      (event.target as HTMLInputElement).value
    );
  }
}
