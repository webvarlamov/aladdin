import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-item-stars',
  templateUrl: './product-item-stars.component.html',
  styleUrls: ['./product-item-stars.component.css']
})
export class ProductItemStarsComponent implements OnInit {
  @Input()
  public rating: number = 0.0;

  constructor() { }

  ngOnInit(): void {
  }

}
