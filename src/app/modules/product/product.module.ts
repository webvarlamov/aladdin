import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductCollectionComponent } from './components/product-collection/product-collection.component';
import {CommonSiteModule} from "../common/common-site.module";
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { ProductFiltersItemComponent } from './components/product-filters/components/product-filters-item/product-filters-item.component';
import { ProductFilterTagsComponent } from './components/product-filter-tags/product-filter-tags.component';
import { ProductFilterTagsItemComponent } from './components/product-filter-tags/components/product-filter-tags-item/product-filter-tags-item.component';
import {RouterModule} from "@angular/router";
import { ProductItemImagesComponent } from './components/product-item/components/product-item-images/product-item-images.component';
import { ProductItemStarsComponent } from './components/product-item/components/product-item-stars/product-item-stars.component';
import { ProductItemPriceComponent } from './components/product-item/components/product-item-price/product-item-price.component';
import { ProductItemDeliveryComponent } from './components/product-item/components/product-item-delivery/product-item-delivery.component';
import { ProductItemDescriptionComponent } from './components/product-item/components/product-item-description/product-item-description.component';
import { ProductItemButtonsComponent } from './components/product-item/components/product-item-buttons/product-item-buttons.component';

@NgModule({
    declarations: [
        ProductItemComponent,
        ProductCollectionComponent,
        ProductFiltersComponent,
        ProductFiltersItemComponent,
        ProductFilterTagsComponent,
        ProductFilterTagsItemComponent,
        ProductItemImagesComponent,
        ProductItemStarsComponent,
        ProductItemPriceComponent,
        ProductItemDeliveryComponent,
        ProductItemDescriptionComponent,
        ProductItemButtonsComponent,
    ],
    exports: [
        ProductCollectionComponent,
        ProductFiltersComponent,
        ProductItemComponent,
        ProductFilterTagsComponent,
    ],
  imports: [
    CommonModule,
    CommonSiteModule,
    RouterModule
  ]
})
export class ProductModule { }
