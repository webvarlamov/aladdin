import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import {CommonSiteModule} from "../../modules/common/common-site.module";
import {SliderModule} from "../../modules/slider/slider.module";
import {ProductModule} from "../../modules/product/product.module";
import {HttpClientModule} from "@angular/common/http";
import {CatalogModule} from "../../modules/catalog/catalog.module";

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    CommonSiteModule,
    SliderModule,
    ProductModule,
    HttpClientModule,
    CatalogModule
  ]
})
export class MainPageModule { }
