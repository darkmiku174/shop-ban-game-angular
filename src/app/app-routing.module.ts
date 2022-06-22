import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GamesManagementComponent } from "./admin/game/game-module/games-management/games-management.component";
import { GameDetailComponent } from "./admin/game/game-module/game-detail/game-detail.component";
import { GamesAddComponent } from "./admin/game/game-module/games-add/games-add.component";
const appRoutes: Routes = [
  { path: 'games', component: GamesManagementComponent },
  { path: 'games/detail/:id', component: GameDetailComponent },
  { path: 'games/add', component: GamesAddComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}