import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-grid-item',
  templateUrl: './product-grid-item.component.html',
  styleUrls: ['./product-grid-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductGridItemComponent implements OnInit {
  @Input()
  public product: any

  constructor() { }

  ngOnInit(): void {
  }

}
