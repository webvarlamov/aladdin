import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-item-buttons',
  templateUrl: './product-item-buttons.component.html',
  styleUrls: ['./product-item-buttons.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemButtonsComponent implements OnInit {
  @Input()
  public isFavourite: boolean = false;
  @Output()
  public favoriteButtonClickEvent: EventEmitter<FavoriteButtonClickEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onFavoriteButtonClick() {
    this.favoriteButtonClickEvent.emit({value: !this.isFavourite})
  }
}

export interface FavoriteButtonClickEvent {
  value: boolean
}
