import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoButtonComponent } from './components/logo-button/logo-button.component';
import { CatalogButtonComponent } from './components/catalog-button/catalog-button.component';
import { OrdersButtonComponent } from './components/orders-button/orders-button.component';
import { FavButtonComponent } from './components/fav-button/fav-button.component';
import { CartButtonComponent } from './components/cart-button/cart-button.component';
import { AccountButtonComponent } from './components/account-button/account-button.component';



@NgModule({
    declarations: [
        LogoButtonComponent,
        CatalogButtonComponent,
        OrdersButtonComponent,
        FavButtonComponent,
        CartButtonComponent,
        AccountButtonComponent
    ],
  exports: [
    LogoButtonComponent,
    CatalogButtonComponent,
    OrdersButtonComponent,
    FavButtonComponent,
    AccountButtonComponent
  ],
    imports: [
        CommonModule
    ]
})
export class ActionButtonsModule { }
