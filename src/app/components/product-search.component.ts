import { Component } from '@angular/core';

@Component({
  selector: 'product-search',
  standalone: true,
  imports: [],
  template: `
    <form class="grid grid-cols-6 gap-6 w-96">
      <div class="col-span-6">
        <label for="Email" class="block text-sm font-medium text-gray-700">
          Product name
        </label>

        <input
          type="text"
          id="query"
          name="query"
          class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
        />
      </div>
    </form>
  `,
})
export class ProductSearchComponent {}
