import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// Component
import { SearchBarComponent } from '../../searchbar/search-bar/search-bar.component';
import { GamesManagementComponent } from './games-management/games-management.component';
import { GamesAddComponent } from './games-add/games-add.component';
import { GamesAddIncludeComponent } from './games-add-include/games-add-include.component';
import { GamesAddTagComponent } from './games-add-tag/games-add-tag.component';
import { GamesAddIncludeinComponent } from './games-add-includein/games-add-includein.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesAddKeyComponent } from './games-add-key/games-add-key.component';


@NgModule({
  declarations: [
    SearchBarComponent,
    GamesManagementComponent,
    GamesAddComponent,
    GamesAddIncludeComponent,
    GamesAddTagComponent,
    GamesAddIncludeinComponent,
    GameDetailComponent,
    GamesAddKeyComponent],
  imports: [
    Ng2SearchPipeModule,
    MatIconModule,
    FormsModule,
    CommonModule,
  ]
})
export class GameModuleModule { }
