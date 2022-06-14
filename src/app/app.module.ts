import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { VocherManagementComponent } from './admin/vocher/vocher-management/vocher-management.component';
import { CartManagementComponent } from './admin/cart/cart-management/cart-management.component';
import { CollectionManagementComponent } from './admin/collection/collection-management/collection-management.component';
import { GamesManagementComponent } from './admin/game/games-management/games-management.component';
import { UserManagementComponent } from './admin/user/user-management/user-management.component';
import { ReportManagementComponent } from './admin/report/report-management/report-management.component';
import { OrderManagementComponent } from './admin/order/order-management/order-management.component';
import { MenuComponent } from './admin/menu/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameListComponent,
    GameDetailComponent,
    VocherManagementComponent,
    CartManagementComponent,
    CollectionManagementComponent,
    GamesManagementComponent,
    UserManagementComponent,
    ReportManagementComponent,
    OrderManagementComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
