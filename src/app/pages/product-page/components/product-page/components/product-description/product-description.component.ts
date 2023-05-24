import { Component, OnInit } from '@angular/core';
import {ProductPageService} from "../../../../service/product-page.service";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(
    public productPageService: ProductPageService
  ) { }

  ngOnInit(): void {
  }

}
