import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { HomeComponent } from 'src/app/product-management/components/home/home.component';
import { GameDetailComponent } from './game-management/game-detail/game-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    GameDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class GameManagementModule { }
