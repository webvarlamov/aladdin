import {Injectable} from '@angular/core';
import {BehaviorSubject, firstValueFrom} from "rxjs";
import {HttpClientService} from "../../../service/http/http-client.service";
import {ProductPageRequest} from "../../../models/product-page-request";
import {FilterExpression, FilterExpressionOperator} from "../../../service/http/model/filter-expression";
import {Range} from "../../../service/http/model/range";
import {RangeOperator} from "../../../service/http/model/range-operator.enum";
import {ProductFiltersRepresentations, Type} from "../../../models/product-page";
import {ProductFiltersValues} from "../../../service/storage/product-filter-values.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryPageService {
  public $productFiltersRepresentations: BehaviorSubject<ProductFiltersRepresentations> = new BehaviorSubject<ProductFiltersRepresentations>({})
  public $productFiltersValues: BehaviorSubject<ProductFiltersValues> = new BehaviorSubject<ProductFiltersValues>({})
  public $products: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(
    private httpClientService: HttpClientService
  ) {
  }

  public loadAnSetProductFiltersRepresentations(): Promise<void> {
    return firstValueFrom(this.httpClientService.getProductFiltersRepresentations()).then(productFiltersRepresentations => {
      this.$productFiltersRepresentations.next(productFiltersRepresentations)
    })
  }

  public loadProductPageByFilterParams(urlFilterParams: ProductFiltersValues) {
    const productPageRequest = new ProductPageRequest();
    productPageRequest.filterExpression = this.buildFilterExpression(urlFilterParams, this.$productFiltersRepresentations.getValue());
    firstValueFrom(this.httpClientService.getProductPage(productPageRequest))
      .then(productPage => {
        this.$productFiltersRepresentations.next(productPage.productFilterRepresentations);
        this.$products.next(productPage.products);
      });
  }

  private buildFilterExpression(urlFilterParams: ProductFiltersValues, productFilterRepresentations: ProductFiltersRepresentations): FilterExpression {
    const filterExpression = new FilterExpression({
      operator: FilterExpressionOperator.AND,
      ranges: []
    });

    Object.keys(urlFilterParams).forEach(filterName => {
      const type = productFilterRepresentations[filterName].type;
      const idField = productFilterRepresentations[filterName].idField;

      if (type == Type.SINGLE_SELECT) {
        const urlFilterParam: number | any = urlFilterParams[filterName];
        filterExpression.ranges.push(new Range({
          property: filterName,
          operator: RangeOperator.ISMEMBER,
          value1: urlFilterParam
        }))
      } else if (type == Type.MULTI_SELECT) {
        const urlFilterParam: any[] = urlFilterParams[filterName];
        filterExpression.ranges.push(new Range({
          property: filterName + "." + idField,
          operator: RangeOperator.IN,
          values: urlFilterParam
        }))
      } else if (type == Type.RANGE) {
        const urlFilterParam: { max: number; min: number } = urlFilterParams[filterName];
        let range: Range;

        if (urlFilterParam.min != null && urlFilterParam.max != null) {
          range = new Range({
            property: filterName,
            operator: RangeOperator.BT,
            value1: urlFilterParam.min,
            value2: urlFilterParam.max,
          })
        } else if(urlFilterParam.min != null && urlFilterParam.max == null) {
          range = new Range({
            property: filterName,
            operator: RangeOperator.GE,
            value1: urlFilterParam.min,
          })
        } else if(urlFilterParam.min == null && urlFilterParam.max != null) {
          range = new Range({
            property: filterName,
            operator: RangeOperator.LE,
            value1: urlFilterParam.max,
          })
        } else {

        }

        filterExpression.ranges.push(range);
      }
    })

    return filterExpression;
  }

  public updateProductFilterValues(productFilterValues: ProductFiltersValues) {
    this.$productFiltersValues.next(productFilterValues);
  }
}
