import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CategoryPageService} from "../../service/category-page.service";
import {
  ProductFilterValuesService,
} from "../../../../service/storage/product-filter-values.service";
import {ProductFilterItemValueChangeEvent} from "../../../../modules/product/models/product-filter-item-value-change-event";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryPageComponent implements OnInit {
  public categoryTitle: string = "Заголовок категории";

  constructor(
    public categoryPageService: CategoryPageService,
    private productFilterValuesService: ProductFilterValuesService
  ) {
  }

  ngOnInit(): void {
    this.categoryPageService.loadAnSetProductFiltersRepresentations().then(ok => {
      const productFilterValues = this.productFilterValuesService.getFilterValues();
      this.categoryPageService.updateProductFilterValues(productFilterValues);
      this.categoryPageService.loadProductPageByFilterParams(productFilterValues);
    })
  }

  public onFilterChangeEvent(event: ProductFilterItemValueChangeEvent) {
    const productFilterValues = this.productFilterValuesService.updateByEvent(event);
    this.categoryPageService.updateProductFilterValues(productFilterValues)
    this.categoryPageService.loadProductPageByFilterParams(productFilterValues);
  }
}
