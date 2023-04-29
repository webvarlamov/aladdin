import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import {CommonSiteModule} from "../../modules/common/common-site.module";
import {ProductModule} from "../../modules/product/product.module";



@NgModule({
  declarations: [
    CategoryPageComponent
  ],
    imports: [
        CommonModule,
        CommonSiteModule,
        ProductModule
    ]
})
export class CategoryPageModule { }
