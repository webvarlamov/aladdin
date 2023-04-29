import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { SectionComponent } from './components/section/section.component';
import { AccentButtonComponent } from './components/accent-button/accent-button.component';



@NgModule({
    declarations: [
        ContentComponent,
        SectionComponent,
        AccentButtonComponent
    ],
  exports: [
    ContentComponent,
    SectionComponent,
    AccentButtonComponent
  ],
    imports: [
        CommonModule
    ]
})
export class CommonSiteModule { }
