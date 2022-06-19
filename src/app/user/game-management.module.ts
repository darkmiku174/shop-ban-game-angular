import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { HomeComponent } from 'src/app/product-management/components/home/home.component';
import { GameDetailComponent } from './game-management/game-detail/game-detail.component';
import { GameSearchComponent } from './game-management/game-search/game-search.component';
import { GameCartComponent } from './game-management/game-cart/game-cart.component';


@NgModule({
  declarations: [
    HomeComponent,
    GameDetailComponent,
    GameSearchComponent,
    GameCartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class GameManagementModule { }
