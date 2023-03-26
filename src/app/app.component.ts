import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { provideComponentStore } from '@ngrx/component-store';
import { tap } from 'rxjs';
import { ProductPaginatorComponent } from './components/product-paginator.component';
import { ProductPreviewList } from './components/product-preview-list.component';
import { ProductSearchComponent } from './components/product-search.component';
import { ProductTotalComponent } from './components/product-total.component';
import { ProductStore } from './products.store';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<section>
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header>
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
          Product Collection
        </h2>

        <p class="mt-4 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
          natus?
        </p>
      </header>
      <div class="mt-8 flex items-end justify-between">
        <product-search></product-search>
        <product-total 
        [number]="number"
        [totalProduct]="(totalProduct$ | async)!"></product-total>
      </div>

      <product-preview-list
        [products]="(product$ | async)!"
      ></product-preview-list>

      <product-paginator></product-paginator>
    </div>
  </section> `,
  imports: [
    ProductTotalComponent,
    ProductPaginatorComponent,
    ProductSearchComponent,
    ProductPreviewList,
    AsyncPipe,
  ],
  providers: [HttpClient, ProductStore],
})
export class AppComponent {
  title = 'component-store';

  private readonly productStore = inject(ProductStore);
  readonly product$ = this.productStore.products$.pipe(
    tap((products) => {
      this.number = products.length;
    })
  );
  readonly totalProduct$ = this.productStore.totalProduct$;
  number: number = 0;
}
