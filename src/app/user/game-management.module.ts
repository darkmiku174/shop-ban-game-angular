import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { GameDetailComponent } from './game-management/game-detail/game-detail.component';
import { GameSearchComponent } from './game-management/game-search/game-search.component';
import { GameCartComponent } from './game-management/game-cart/game-cart.component';
import { GamePaymentComponent } from './game-management/game-payment/game-payment.component';
import { GameLoginComponent } from './game-management/game-login/game-login.component';
import { HomePageComponent } from './game-management/home-page/home-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GameDetailComponent,
    GameSearchComponent,
    GameCartComponent,
    GamePaymentComponent,
    GameLoginComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class GameManagementModule { }