import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { CartManagementComponent } from './components/cart-management/cart-management.component'; 
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';

//Services
import { cartRoutes } from './cart-management.routes';


@NgModule({
  declarations: [
    CartManagementComponent,
    CartDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes)
  ]
})
export class GamesManagementModule { }
