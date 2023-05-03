import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductFilterRepresentation, ProductFiltersRepresentations, ProductPage} from "../../models/product-page";
import {ProductPageRequest} from "../../models/product-page-request";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private http: HttpClient
  ) { }

  public getCategoriesTree(): Observable<string> {
    return this.http.get("/api/category/tree") as Observable<string>
  }

  public getProductPage(productPageRequest: ProductPageRequest): Observable<ProductPage> {
    let params = new HttpParams();
    params = productPageRequest.filterExpression ?
      params.append('filterExpression', JSON.stringify(productPageRequest.filterExpression)) :
      params;

    params = params.append("page", productPageRequest.page.page)

    return this.http.get("/api/products/get_page", {params}) as Observable<ProductPage>
  }

  public getProductFiltersRepresentations(): Observable<ProductFiltersRepresentations> {
    return this.http.get("/api/product_filters_representations/get") as Observable<ProductFiltersRepresentations>;
  }
}
