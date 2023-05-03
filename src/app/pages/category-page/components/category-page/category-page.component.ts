import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CategoryPageService} from "../../service/category-page.service";
import {
  ProductFilterValuesService,
} from "../../../../service/product/product-filter-values.service";
import {ProductFilterItemValueChangeEvent} from "../../../../modules/product/models/product-filter-item-value-change-event";
import {PaginationService} from "../../../../service/pagination/pagination.service";

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
    public productFilterValuesService: ProductFilterValuesService,
    public paginationService: PaginationService
  ) {
  }

  ngOnInit(): void {
    this.categoryPageService.loadAnSetProductFiltersRepresentations().then(ok => {
      const productFilterValues = this.productFilterValuesService.getFilterValues();
      this.categoryPageService.updateProductFilterValues(productFilterValues);
      this.categoryPageService.loadAnSetProductPage(productFilterValues, this.paginationService.getCurrentPage()).then(productPage => {
        this.paginationService.setTotals(productPage.totalPages, productPage.totalElements)
      });
    })
  }

  public onFilterChangeEvent(event: ProductFilterItemValueChangeEvent) {
    this.paginationService.updateByEvent(0);
    const productFilterValues = this.productFilterValuesService.updateByEvent(event);
    this.categoryPageService.updateProductFilterValues(productFilterValues)
    this.categoryPageService.loadAnSetProductPage(productFilterValues, this.paginationService.getCurrentPage()).then(productPage => {
      this.paginationService.setTotals(productPage.totalPages, productPage.totalElements)
    });
  }

  public onChangePageEvent(requestedPage: number) {
    this.paginationService.updateByEvent(requestedPage);
    const filterValues = this.productFilterValuesService.getFilterValues();
    this.categoryPageService.loadAnSetProductPage(filterValues, requestedPage).then(productPage => {
      this.paginationService.setTotals(productPage.totalPages, productPage.totalElements)
    });
  }
}
