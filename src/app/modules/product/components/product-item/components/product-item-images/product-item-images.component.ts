import {Component, Input, OnInit} from '@angular/core';
import {ProductImage} from "../../../../../../models/product-list-page";

@Component({
  selector: 'app-product-item-images',
  templateUrl: './product-item-images.component.html',
  styleUrls: ['./product-item-images.component.css']
})
export class ProductItemImagesComponent implements OnInit {
  @Input()
  public productImages: ProductImage[] = [];
  @Input()
  public mainProductImage: string;
  public selectedProductImage: ProductImage;

  constructor() { }

  ngOnInit(): void {
  }

  public onImageSelectorMouseEnter(productImage: ProductImage) {
    this.selectedProductImage = productImage;
  }

  public getViewportImage(): ProductImage {
    return this.selectedProductImage ? this.selectedProductImage : {image: this.mainProductImage, sortOrder: 0};
  }

  public onImageSelectorMouseLeave(): void {
    this.selectedProductImage = null;
  }
}
