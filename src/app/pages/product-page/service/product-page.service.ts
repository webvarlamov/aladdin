import { Injectable } from '@angular/core';
import {HttpClientService} from "../../../service/http/http-client.service";
import {BehaviorSubject, firstValueFrom} from "rxjs";
import {Product} from "../../../models/product-list-page";

@Injectable({
  providedIn: 'root'
})
export class ProductPageService {
  public $product: BehaviorSubject<Product> = new BehaviorSubject<Product>(null);

  constructor(
    private httpClientService: HttpClientService
  ) {}

  public loadAnSetProductPage(productId: any): Promise<void> {
    return firstValueFrom(
      this.httpClientService.getProductPage(productId)
    ).then(productPage => {
      this.$product.next(productPage.product);
    })
  }
}
