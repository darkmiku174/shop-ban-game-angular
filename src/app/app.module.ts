import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { GamesManagementModule } from 'src/module/cart-management/cart-management.module';
//Component
import { GamesManagementComponent } from './admin/game/games-management/games-management.component';
import { GamesAddComponent } from './admin/game/games-add/games-add.component';
import { GamesAddIncludeComponent } from './admin/game/games-add-include/games-add-include.component';
import { GamesAddTagComponent } from './admin/game/games-add-tag/games-add-tag.component';
import { GamesAddIncludeinComponent } from './admin/game/games-add-includein/games-add-includein.component';
import { GameDetailComponent } from './admin/game/game-detail/game-detail.component';
import { GamesAddKeyComponent } from './admin/game/games-add-key/games-add-key.component';
import { UserManagementComponent } from './admin/user/user-management/user-management.component';
import { OrderManagementComponent } from './admin/order/order-management/order-management.component';
import { CollectionManagementComponent } from './admin/collection/collection-management/collection-management.component';
import { CartManagementComponent } from './admin/cart/cart-management/cart-management.component';
import { VocherManagementComponent } from './admin/vocher/vocher-management/vocher-management.component';


import { AppComponent } from './app.component';
import { MenuComponent } from './admin/menu/menu/menu.component';
import { KeyAddComponent } from './admin/key/key-add/key-add.component';
import { DeleteCollectionNotificationComponent } from './admin/notification/delete-collection-notification/delete-collection-notification.component';
import { DeleteKeyNotificationComponent } from './admin/notification/delete-key-notification/delete-key-notification.component';
import { DeleteProductNotificationComponent } from './admin/notification/delete-product-notification/delete-product-notification.component';
import { DeleteUserNotificationComponent } from './admin/notification/delete-user-notification/delete-user-notification.component';
import { SearchBarComponent } from './admin/searchbar/search-bar/search-bar.component';
import { ProductsService } from './services/products.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    KeyAddComponent,

    GamesManagementComponent,
    GamesAddComponent,
    GamesAddIncludeComponent,
    GamesAddTagComponent,
    GamesAddIncludeinComponent,
    GameDetailComponent,
    GamesAddKeyComponent,
    UserManagementComponent,
    OrderManagementComponent,
    CollectionManagementComponent,
    CartManagementComponent,
    VocherManagementComponent,

    DeleteCollectionNotificationComponent,
    DeleteKeyNotificationComponent,
    DeleteProductNotificationComponent,
    DeleteUserNotificationComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
