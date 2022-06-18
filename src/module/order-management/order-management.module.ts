import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
//Services
import { orderRoutes } from './order-management.routes';

@NgModule({
  declarations: [
    OrderManagementComponent,
    OrderDetailComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GamesManagementModule { }
