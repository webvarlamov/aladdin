import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './components/product-page/product-page.component';
import {CommonSiteModule} from "../../modules/common/common-site.module";
import {ProductModule} from "../../modules/product/product.module";
import { ProductDescriptionComponent } from './components/product-page/components/product-description/product-description.component';
import { ProductOfferComponent } from './components/product-page/components/product-offer/product-offer.component';
import {ProductImagesComponent} from "./components/product-page/components/product-images/product-images.component";



@NgModule({
    declarations: [
        ProductPageComponent,
        ProductDescriptionComponent,
        ProductOfferComponent,
        ProductImagesComponent
    ],
    exports: [
        ProductDescriptionComponent
    ],
    imports: [
        CommonModule,
        CommonSiteModule,
        ProductModule
    ]
})
export class ProductPageModule { }
