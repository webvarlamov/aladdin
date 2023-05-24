import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentComponent} from './components/content/content.component';
import {SectionComponent} from './components/section/section.component';
import {AccentButtonComponent} from './components/accent-button/accent-button.component';
import {PaginationComponent} from "./pagination/pagination.component";

@NgModule({
  declarations: [
    ContentComponent,
    SectionComponent,
    AccentButtonComponent,
    PaginationComponent
  ],
  exports: [
    ContentComponent,
    SectionComponent,
    AccentButtonComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommonSiteModule {
}
