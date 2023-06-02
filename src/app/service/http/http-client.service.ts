import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductFilterRepresentation, ProductFiltersRepresentations, ProductListPage} from "../../models/product-list-page";
import {ProductListPageRequest} from "../../models/product-list-page-request";
import {ProductPage} from "../../models/product-page";
import {Category} from "../../models/category";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private http: HttpClient
  ) { }

  public getCategoriesTree(): Observable<Category[]> {
    return this.http.get("/api/category/tree") as Observable<Category[]>
  }


  public getCategoriesList(): Observable<Category[]>  {
    return this.http.get("/api/category/list") as Observable<Category[]>
  }

  public getProductListPage(productPageRequest: ProductListPageRequest): Observable<ProductListPage> {
    let params = new HttpParams();
    params = productPageRequest.filterExpression ?
      params.append('filterExpression', JSON.stringify(productPageRequest.filterExpression)) :
      params;
    params = params.append("page", productPageRequest.page.page);
    params = params.append("size", productPageRequest.page.size);

    params = productPageRequest.categoryPath ? params.append("categoryPath", productPageRequest.categoryPath) : params;
    params = params.append("collectionId", 63);

    return this.http.get("/api/products/get_product_list_page", {params}) as Observable<ProductListPage>
  }

  public getProductPage(productId: number): Observable<ProductPage>  {
    let params = new HttpParams();
    params = params.set("productId", productId);

    return this.http.get("/api/products/get_product_page", {params}) as Observable<ProductPage>
  }

  public getProductFiltersRepresentations(): Observable<ProductFiltersRepresentations> {
    return this.http.get("/api/product_filters_representations/get") as Observable<ProductFiltersRepresentations>;
  }
}
