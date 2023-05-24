import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductFilterRepresentation, ProductFiltersRepresentations} from "../../../../models/product-list-page";
import {ProductFilterItemValueChangeEvent} from "../../models/product-filter-item-value-change-event";
import {ProductFiltersValues} from "../../../../service/product/product-filter-values.service";

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFiltersComponent implements OnInit {
  @Input()
  public productFilterRepresentations: ProductFiltersRepresentations = {};
  @Input()
  public productFilterValues: ProductFiltersValues = {}
  @Output()
  public onChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public onChangeEvent(event: ProductFilterItemValueChangeEvent) {
    this.onChange.emit(event)
  }

  public trackByKey(index: number, item: any): string {
    return item.key;
  }

  sort(keyvalues: {key: string, value: ProductFilterRepresentation}[]): {key: string, value: ProductFilterRepresentation}[] {
    return keyvalues.sort((a, b) => a.value.order - b.value.order)
  }
}
