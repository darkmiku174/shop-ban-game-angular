import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { UserManagementComponent } from './components/user-management/user-management.component';
//Services
import { userRoutes } from './user-management.routes';

@NgModule({
  declarations: [
    UserManagementComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GamesManagementModule { }
