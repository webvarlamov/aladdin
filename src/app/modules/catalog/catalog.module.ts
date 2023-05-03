import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from '../common/catalog/catalog.component';
import { CategoriesItemComponent } from './components/categories-item/categories-item.component';

@NgModule({
    declarations: [
        CatalogComponent,
        CategoriesItemComponent,
    ],
    exports: [
        CatalogComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CatalogModule { }
