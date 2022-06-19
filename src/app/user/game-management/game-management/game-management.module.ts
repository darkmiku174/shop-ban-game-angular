import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { GameManagementComponent } from '../game-management.component';
@NgModule({
  declarations: [
    GameManagementComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class GameManagementModule { }
