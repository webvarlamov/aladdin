import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../models/product-list-page";
import {FavoriteButtonClickEvent} from "./components/product-item-buttons/product-item-buttons.component";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {
  @Input()
  public product: Product;
  @Input()
  public isFavorite: boolean = false;
  @Output()
  public favoriteButtonClickEvent: EventEmitter<FavoriteButtonClickEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onFavoriteButtonClickEvent($event: FavoriteButtonClickEvent) {
    this.favoriteButtonClickEvent.emit($event)
  }
}
