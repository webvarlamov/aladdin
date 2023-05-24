import { Component, OnInit } from '@angular/core';
import {ProductPageService} from "../../service/product-page.service";
import {Product} from "../../../../models/product-list-page";
import {ImageData} from "./components/product-images/product-images.component";
import {AppURLSearchParamsService} from "../../../../service/app-u-r-l-search-params.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  public productTitle: string = "Заголовок продукта"

  constructor(
    public productPageService: ProductPageService,
    public appURLSearchParamsService: AppURLSearchParamsService
  ) { }

  ngOnInit(): void {
    let urlSearchParams = this.appURLSearchParamsService.getUrlSearchParams();
    let urlSearchParam = urlSearchParams['productId'];
    if (urlSearchParam != null && urlSearchParam.length == 1) {
      this.productPageService.loadAnSetProductPage(urlSearchParam[0]);
    }
  }

  getImages(product: Product): ImageData[] {
    return product.images
      .sort((a, b) => a.sortOrder - b.sortOrder)
      .map(image => ({
      previewURL: "/api/images/A/" + image.image,
      fullViewURL: "/api/images/B/" + image.image,
    }));
  }
}
