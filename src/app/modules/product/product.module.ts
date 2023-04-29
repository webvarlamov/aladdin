import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductGridItemComponent } from './components/product-grid-item/product-grid-item.component';
import { ProductCollectionComponent } from './components/product-collection/product-collection.component';
import {CommonSiteModule} from "../common/common-site.module";
import { ProductFiltersComponent } from './components/product-filters/product-filters.component';
import { ProductFiltersItemComponent } from './components/product-filters/components/product-filters-item/product-filters-item.component';

@NgModule({
    declarations: [
        ProductGridItemComponent,
        ProductCollectionComponent,
        ProductFiltersComponent,
        ProductFiltersItemComponent,
    ],
    exports: [
        ProductCollectionComponent,
        ProductFiltersComponent,
        ProductGridItemComponent
    ],
  imports: [
    CommonModule,
    CommonSiteModule
  ]
})
export class ProductModule { }
