import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {ProductFilterItemValueChangeEvent} from "../../modules/product/models/product-filter-item-value-change-event";
import {Type} from "../../models/product-page";

@Injectable({
  providedIn: 'root'
})
export class ProductFilterValuesService {
  private static FILTER_QUERY_PARAM_NAME = 'filter';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {
  }

  public updateByEvent(event: ProductFilterItemValueChangeEvent): ProductFiltersValues {
    let productFiltersValues: ProductFiltersValues = this.getFilterValues();

    if (event.filterType === Type.RANGE) {
      if (isNaN(event.rangeValue.max) && isNaN(event.rangeValue.min)) {
        delete productFiltersValues[event.filterName];
      } else {
        productFiltersValues[event.filterName] = {
          max: isNaN(event.rangeValue.max) ? null : event.rangeValue.max,
          min: isNaN(event.rangeValue.min) ? null : event.rangeValue.min,
        }
      }
    }

    if (event.filterType === Type.MULTI_SELECT) {
      let multySelectValues: Array<any> = productFiltersValues[event.filterName] ? productFiltersValues[event.filterName] : [];
      if (event.multiSelectPayload.checkboxValue) {
        multySelectValues.push(event.multiSelectPayload.targetId)
      } else {
        multySelectValues = multySelectValues.filter(v => v != event.multiSelectPayload.targetId)
      }

      if(multySelectValues.length == 0) {
        delete productFiltersValues[event.filterName];
      } else {
        productFiltersValues[event.filterName] = multySelectValues;
      }
    }

    if(event.filterType == Type.SINGLE_SELECT) {
      productFiltersValues[event.filterName] = event.singleSelectPayload.targetId
    }

    const queryParams = {
      filter: btoa(JSON.stringify(productFiltersValues))
    };

    const urlTree = this.router.createUrlTree([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });

    this.location.go(urlTree.toString());

    return productFiltersValues;
  }

  public getFilterValues(): ProductFiltersValues {
    const urlSearchParams = new URLSearchParams(window.location.search);
    let urlFilterParams: ProductFiltersValues = {};

    try {
      const urlFilterParamsBase64 = urlSearchParams.get(ProductFilterValuesService.FILTER_QUERY_PARAM_NAME);
      const urlFilterParamsJson = atob(urlFilterParamsBase64);

      urlFilterParams = JSON.parse(urlFilterParamsJson);
      if (urlFilterParams == null) {
        urlFilterParams = {};
      }
    } catch (e) {
      console.info("Error while parse filter query param value from URL:", e)
      urlFilterParams = {};
    }

    console.info("Filter query param value from URL:", urlFilterParams)
    return urlFilterParams;
  }
}

export interface ProductFiltersValues {
  [filterName: string]: Array<any> | {max: number, min: number} | any
}
