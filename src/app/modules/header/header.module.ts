import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActionButtonsModule} from "../action-buttons/action-buttons.module";
import {SearchModule} from "../search/search.module";
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ActionButtonsModule,
    SearchModule
  ]
})
export class HeaderModule { }
