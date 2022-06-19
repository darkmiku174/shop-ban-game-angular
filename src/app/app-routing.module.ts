import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameManagementComponent } from "./user/game-management/game-management.component";
import { HomeComponent } from "./product-management/components/home/home.component"
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameManagementComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [GameManagementComponent]
