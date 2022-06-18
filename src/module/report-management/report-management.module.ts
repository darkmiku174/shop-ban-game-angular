import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { ReportManagementComponent } from './components/report-management/report-management.component';
//Services
import { reportRoutes } from './report-management.routes';

@NgModule({
  declarations: [
    ReportManagementComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GamesManagementModule { }
