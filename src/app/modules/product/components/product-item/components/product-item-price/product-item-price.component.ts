import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-item-price',
  templateUrl: './product-item-price.component.html',
  styleUrls: ['./product-item-price.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemPriceComponent implements OnInit {
  @Input()
  public price: number = 0;
  @Input()
  public discount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public abs(number: number): number {
    return Math.abs(number);
  }
}
