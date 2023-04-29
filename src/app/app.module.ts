import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {CommonSiteModule} from "./modules/common/common-site.module";
import {HeaderModule} from "./modules/header/header.module";
import {CatalogModule} from "./modules/catalog/catalog.module";
import {FooterModule} from "./modules/footer/footer.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonSiteModule,
    HeaderModule,
    CatalogModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
