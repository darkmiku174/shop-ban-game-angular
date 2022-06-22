import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { GameModuleModule } from './admin/game/game-module/game-module.module';
//Component


import { UserManagementComponent } from './admin/user/user-management/user-management.component';
import { OrderManagementComponent } from './admin/order/order-management/order-management.component';

import { CartManagementComponent } from './admin/cart/cart-management/cart-management.component';
import { VocherManagementComponent } from './admin/vocher/vocher-management/vocher-management.component';


import { AppComponent } from './app.component';
import { MenuComponent } from './admin/menu/menu/menu.component';
import { KeyAddComponent } from './admin/key/key-add/key-add.component';
import { DeleteCollectionNotificationComponent } from './admin/notification/delete-collection-notification/delete-collection-notification.component';
import { DeleteKeyNotificationComponent } from './admin/notification/delete-key-notification/delete-key-notification.component';
import { DeleteProductNotificationComponent } from './admin/notification/delete-product-notification/delete-product-notification.component';
import { DeleteUserNotificationComponent } from './admin/notification/delete-user-notification/delete-user-notification.component';
import { ProductsService } from './services/products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollectionService } from './services/collection.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    KeyAddComponent,
    UserManagementComponent,
    OrderManagementComponent,
    CartManagementComponent,
    VocherManagementComponent,

    DeleteCollectionNotificationComponent,
    DeleteKeyNotificationComponent,
    DeleteProductNotificationComponent,
    DeleteUserNotificationComponent,
  ],
  imports: [
    GameModuleModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    ProductsService,CollectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
