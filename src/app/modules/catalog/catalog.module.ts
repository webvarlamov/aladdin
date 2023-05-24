import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CategoriesItemComponent } from './components/categories-item/categories-item.component';
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        CatalogComponent,
        CategoriesItemComponent,
    ],
    exports: [
        CatalogComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CatalogModule { }
