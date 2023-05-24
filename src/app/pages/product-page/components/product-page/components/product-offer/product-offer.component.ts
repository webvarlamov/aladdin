import { Component, OnInit } from '@angular/core';
import {ProductPageService} from "../../../../service/product-page.service";

@Component({
  selector: 'app-product-offer',
  templateUrl: './product-offer.component.html',
  styleUrls: ['./product-offer.component.css']
})
export class ProductOfferComponent implements OnInit {

  constructor(
    public productPageService: ProductPageService
  ) { }

  ngOnInit(): void {
  }

}
