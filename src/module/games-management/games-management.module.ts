import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GamesAddComponent } from './components/games-add/games-add.component';
import { GamesAddIncludeComponent } from './components/games-add-include/games-add-include.component';
import { GamesAddIncludeinComponent } from './components/games-add-includein/games-add-includein.component';
import { GamesAddKeyComponent } from './components/games-add-key/games-add-key.component';
import { GamesAddTagComponent } from './components/games-add-tag/games-add-tag.component';
import { GamesManagementComponent } from './components/games-management/games-management.component';

//Services
import { gameRoutes } from './games-management.routes';


@NgModule({
  declarations: [
    GamesManagementComponent,
    GameDetailComponent,
    GamesAddComponent,
    GamesAddIncludeComponent,
    GamesAddIncludeinComponent,
    GamesAddKeyComponent,
    GamesAddTagComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(gameRoutes)
  ]
})
export class GamesManagementModule { }
