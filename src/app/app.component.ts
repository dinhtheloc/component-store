import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductPreviewList } from './components/product-preview-list.component';
import { ProductSearchComponent } from './components/product-search.component';
import { ProductStore } from './products.store';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ProductSearchComponent, ProductPreviewList, AsyncPipe],
  providers: [ProductStore, HttpClient],
})
export class AppComponent {
  title = 'component-store';

  private readonly productStore = inject(ProductStore);

  readonly product$ = this.productStore.products$;

  constructor() {
    this.productStore.search({query: ''});
  }
}
