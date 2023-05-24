import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-item-description',
  templateUrl: './product-item-description.component.html',
  styleUrls: ['./product-item-description.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemDescriptionComponent implements OnInit {
  @Input()
  public title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
