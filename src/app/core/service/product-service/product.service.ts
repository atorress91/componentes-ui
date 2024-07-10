import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs";

import { Product } from "@app/core/models/product/product.model";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class ProductService {
  private urlApi: string;

  constructor(private router: Router, private http: HttpClient) {
    this.urlApi = environment.apis.apiUrl;
  }

  createProduct(product: Product) {
    return this.http.post<Response>(this.urlApi.concat('/product'), product).pipe(
      map((data) => {
        return data;
      })
    );
  }

  updateProduct(product: Product) {
    return this.http.put<Response>(this.urlApi.concat('/product'), product).pipe(
      map((data) => {
        return data;
      })
    );
  }

  deleteProduct(productId: number) {
    return this.http.post<Response>(this.urlApi.concat('/product/delete_product'), productId).pipe(
      map((data) => {
        return data;
      })
    );
  }

  getAllProducts() {
    return this.http.get<Response>(this.urlApi.concat('/product/get_all_products')).pipe(
      map((data) => {
        return data;
      })
    )
  }
}
