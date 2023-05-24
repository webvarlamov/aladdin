import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryPageService} from "../../service/category-page.service";
import {
  ProductFilterValuesService,
} from "../../../../service/product/product-filter-values.service";
import {ProductFilterItemValueChangeEvent} from "../../../../modules/product/models/product-filter-item-value-change-event";
import {PaginationService} from "../../../../service/pagination/pagination.service";
import {
  FavoriteButtonClickEvent
} from "../../../../modules/product/components/product-item/components/product-item-buttons/product-item-buttons.component";
import {FavouritesProductsService} from "../../../../service/favourites-products.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, firstValueFrom, Subscription, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryPageComponent implements OnInit, OnDestroy {
  public categoryTitle: string = "Заголовок категории";
  public navigationEndSubscribtion: Subscription;

  constructor(
    public categoryPageService: CategoryPageService,
    public productFilterValuesService: ProductFilterValuesService,
    public paginationService: PaginationService,
    public favouritesProductsService: FavouritesProductsService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.navigationEndSubscribtion = this.subscribeNavigationEnd()
  }

  ngOnInit(): void {
    this.categoryPageService.loadAnSetProductFiltersRepresentations().then(ok => {
      const productFilterValues = this.productFilterValuesService.getFilterValues();
      this.categoryPageService.updateProductFilterValues(productFilterValues);
      this.categoryPageService.loadAnSetProductListPage(productFilterValues, this.paginationService.getCurrentPage(), null).then(productPage => {
        this.paginationService.setTotals(productPage.totalPages, productPage.totalElements)
      });
    })
  }

  public onFilterChangeEvent(event: ProductFilterItemValueChangeEvent): void {
    this.paginationService.updateByEvent(0);
    const productFilterValues = this.productFilterValuesService.updateByEvent(event);
    this.categoryPageService.updateProductFilterValues(productFilterValues)
    this.categoryPageService.loadAnSetProductListPage(productFilterValues, this.paginationService.getCurrentPage(), null).then(productPage => {
      this.paginationService.setTotals(productPage.totalPages, productPage.totalElements)
    });
  }

  public onChangePageEvent(requestedPage: number): void {
    this.paginationService.updateByEvent(requestedPage);
    const filterValues = this.productFilterValuesService.getFilterValues();
    this.categoryPageService.loadAnSetProductListPage(filterValues, requestedPage, null).then(productPage => {
      this.paginationService.setTotals(productPage.totalPages, productPage.totalElements)
    });
  }

  public onFavoriteButtonClickEvent($event: FavoriteButtonClickEvent, productId: number): void {
    if ($event.value) {
      this.favouritesProductsService.addToFavourites(productId);
    } else {
      this.favouritesProductsService.removeFromFavourites(productId);
    }
  }

  private subscribeNavigationEnd(): Subscription {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      switchMap(event => firstValueFrom(this.activatedRoute.paramMap)),
      tap(paramMap => {
        let categoryPath = paramMap.get("categoryPath");
        this.categoryPageService.updateProductFilterValues({});
        this.categoryPageService.loadAnSetProductListPage({}, this.paginationService.getCurrentPage(), categoryPath).then(productPage => {
          this.paginationService.setTotals(productPage.totalPages, productPage.totalElements)
        })
      })
    ).subscribe()
  }

  ngOnDestroy(): void {
    try {
      this.navigationEndSubscribtion.unsubscribe();
    } catch (e) {
    }
  }
}
