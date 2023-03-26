import { inject, Injectable } from '@angular/core';
import { ComponentStore, OnStateInit, tapResponse } from '@ngrx/component-store';
import { switchMap, withLatestFrom } from 'rxjs';
import { ProductService } from './core/services/product.service';
import { Product } from './models';

export interface ProductState {
  products: Product[];
  total: 0;
  skip: number;
  limit: number;
  error?: string;
}

@Injectable()
export class ProductStore extends ComponentStore<ProductState> {
  private readonly productService = inject(ProductService);

  constructor() {
    super({
      products: [],
      total: 0,
      skip: 0,
      limit: 0,
      error: '',
    });
  }

  readonly updateProducts = this.updater(
    (state, newProducts: ProductState) => ({
      ...newProducts,
    })
  );
  readonly setError = this.updater((state, error: string) => ({
    ...state,
    error,
  }));

  readonly totalProduct$ = this.select((state) => state.total);
  readonly error$ = this.select((state) => state.error);
  readonly products$ = this.select((state) => state.products);

  readonly search = this.effect<{
    query: string;
    skip: number,
    limit: number
  }>((trigger$) =>
    trigger$.pipe(
      switchMap(({ query }) =>
        this.productService.searchProducts(query).pipe(
          tapResponse(
            (result) => this.updateProducts(result),
            (error: { message: string }) => this.setError(error.message)
          )
        )
      )
    )
  );

}
