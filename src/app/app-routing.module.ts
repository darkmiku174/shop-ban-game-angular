import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./user/game-management/home/home.component";
import { GameDetailComponent } from "./user/game-management/game-detail/game-detail.component";
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game_detail', component: GameDetailComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [HomeComponent]
