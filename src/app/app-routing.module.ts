import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./user/game-management/home/home.component";
import { GameDetailComponent } from "./user/game-management/game-detail/game-detail.component";
import { GameCartComponent } from "./user/game-management/game-cart/game-cart.component";
import { GameSearchComponent } from "./user/game-management/game-search/game-search.component";
import { GamePaymentComponent } from "./user/game-management/game-payment/game-payment.component";
import { GameLoginComponent } from "./user/game-management/game-login/game-login.component";
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game_detail', component: GameDetailComponent },
  { path: 'game_cart', component: GameCartComponent },
  { path: 'game_search', component: GameSearchComponent },
  { path: 'game_payment', component: GamePaymentComponent },
  { path: 'game_login', component: GameLoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [HomeComponent]
