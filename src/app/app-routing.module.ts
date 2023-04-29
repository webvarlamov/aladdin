import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./pages/main-page/components/main-page/main-page.component";
import {CategoryPageComponent} from "./pages/category-page/components/category-page/category-page.component";
import {MainPageModule} from "./pages/main-page/main-page.module";
import {CategoryPageModule} from "./pages/category-page/category-page.module";
import {ProductPageModule} from "./pages/product-page/product-page.module";
import {ProductPageComponent} from "./pages/product-page/components/product-page/product-page.component";

const routes: Routes = [
  {path: "", component: MainPageComponent, },
  {path: "category", component: CategoryPageComponent },
  {path: "product", component: ProductPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainPageModule,
    CategoryPageModule,
    ProductPageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
