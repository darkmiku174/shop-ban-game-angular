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
  { path: 'games/:id', component: GameDetailComponent },
  { path: 'cart', component: GameCartComponent },
  { path: 'search', component: GameSearchComponent },
  { path: 'payment', component: GamePaymentComponent },
  { path: 'login', component: GameLoginComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [HomeComponent]
