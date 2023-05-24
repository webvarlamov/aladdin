import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryPageComponent} from './components/category-page/category-page.component';
import {CommonSiteModule} from "../../modules/common/common-site.module";
import {ProductModule} from "../../modules/product/product.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    CategoryPageComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    CommonSiteModule,
    ProductModule
  ]
})
export class CategoryPageModule {
}
