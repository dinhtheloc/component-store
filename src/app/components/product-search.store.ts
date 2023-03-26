import { inject, Injectable } from '@angular/core';
import { ComponentStore, OnStateInit } from '@ngrx/component-store';
import { debounceTime, EMPTY, filter, switchMap } from 'rxjs';
import { ProductStore } from '../products.store';

interface ProductSearchState {
  skip: number;
  limit: number;
  query: string;
}

@Injectable()
export class ProductSearchStore
  extends ComponentStore<ProductSearchState>
  implements OnStateInit
{
  private readonly productStore = inject(ProductStore);
  constructor() {
    super({
      skip: 0,
      limit: 30,
      query: '',
    });

    this.state$.subscribe(console.log);
  }

  private readonly search = this.effect<ProductSearchState>((trigger$) =>
    trigger$.pipe(
      debounceTime(300),
      switchMap(({ skip, limit, query }) => {
        this.productStore.search({
          query,
          skip,
          limit,
        });
        return EMPTY;
      })
    )
  );

  private readonly limit$ = this.select((state) => state.limit);

  readonly vm$ = this.select(
    this.limit$,
    this.productStore.totalProduct$,
    this.productStore.error$,
    this.productStore.products$,
    (limit, totalProducts, error, products) => ({
      limit,
      totalProducts,
      error,
      hasProducts: !!products?.length,
    })
  );

  readonly setSearchTerm = this.updater((state, query: string) => ({
    ...state,
    query,
  }));
  //   readonly pageUpdate = this.updater((state, page:))

  ngrxOnStateInit() {
    this.search(this.state$);
  }
}
