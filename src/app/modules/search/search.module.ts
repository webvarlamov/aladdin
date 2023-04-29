import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './components/search-input/search-input.component';



@NgModule({
    declarations: [
        SearchInputComponent
    ],
    exports: [
        SearchInputComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SearchModule { }
