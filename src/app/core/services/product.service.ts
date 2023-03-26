import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/models';
import { ProductState } from 'src/app/products.store';

@Injectable({ providedIn: 'root' })
export class ProductService {
  readonly API_PATH = environment.API_URL;

  private http = inject(HttpClient);

  searchProducts(queryName: string): Observable<ProductState> {
    return this.http.get<ProductState>(`${this.API_PATH}/products/search?q=${queryName}`);
  }
}
