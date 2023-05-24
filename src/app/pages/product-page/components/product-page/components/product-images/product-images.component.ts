import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent implements OnInit {
  @Input()
  public images: ImageData[] = [];
  public selectedImage: ImageData = null;

  constructor() { }

  ngOnInit(): void {
  }

  getSelectedImage() {
    return this.selectedImage ? this.selectedImage : this.images[0]
  }
}

export interface ImageData {
  previewURL: string;
  fullViewURL: string;
}
