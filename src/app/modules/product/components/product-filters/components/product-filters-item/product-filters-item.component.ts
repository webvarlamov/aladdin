import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductFilterItemValueChangeEvent} from "../../../../models/product-filter-item-value-change-event";
import {ProductFilterRepresentation} from "../../../../../../models/product-page";
import {ProductFiltersValues} from "../../../../../../service/product/product-filter-values.service";

@Component({
  selector: 'app-product-filters-item',
  templateUrl: './product-filters-item.component.html',
  styleUrls: ['./product-filters-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFiltersItemComponent implements OnInit {
  @Input()
  public filterName = '';
  @Input()
  public productFilterRepresentation: ProductFilterRepresentation;
  @Input()
  public productFilterValue: Array<any> | {max: number, min: number} | any;
  @Output()
  public onChange: EventEmitter<ProductFilterItemValueChangeEvent> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public getMinPlaceholder(availableValues: number[]) {
    return availableValues ? "от " + Math.min(...availableValues) + " ₽" : "";
  }

  public getMaxPlaceholder(availableValues: number[]) {
    return availableValues ? "до " + Math.max(...availableValues) + " ₽" : "";
  }

  public onSingleSelectChange(value: boolean, productFilterRepresentation: ProductFilterRepresentation, target: any) {
    const event: ProductFilterItemValueChangeEvent = {
      filterName: this.filterName,
      filterType: productFilterRepresentation.type,
      singleSelectPayload: {
        targetId: target[productFilterRepresentation.idField],
        idField: productFilterRepresentation.idField,
        radiobuttonValue: value,
      }
    }
    this.onChange.emit(event)
  }

  public onMultySelectChange(value: boolean, productFilterRepresentation: ProductFilterRepresentation, target: any) {
    const event: ProductFilterItemValueChangeEvent = {
      filterName: this.filterName,
      filterType: productFilterRepresentation.type,
      multiSelectPayload: {
        targetId: target[productFilterRepresentation.idField],
        idField: productFilterRepresentation.idField,
        checkboxValue: value,
      }
    }
    this.onChange.emit(event)
  }

  public onRangeChange(min: string, max: string, productFilterRepresentation: ProductFilterRepresentation) {
    const event: ProductFilterItemValueChangeEvent = {
      filterName: this.filterName,
      filterType: productFilterRepresentation.type,
      rangeValue: {
        min: parseInt(min),
        max: parseInt(max)
      }
    }
    this.onChange.emit(event)
  }

  public trackById(idField: string, index: any, item: any): number {
    return item[idField]
  }
}
