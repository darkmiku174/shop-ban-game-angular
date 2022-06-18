import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { VocherManagementComponent } from './components/vocher-management/vocher-management.component';
import { VocherAddComponent } from './components/vocher-add/vocher-add.component';
import { VocherAddListgameComponent } from './components/vocher-add-listgame/vocher-add-listgame.component';
import { VocherDetailComponent } from './components/vocher-detail/vocher-detail.component';
//Services
import { vocherRoutes } from './vocher-management.routes';

@NgModule({
  declarations: [
    VocherManagementComponent,
    VocherAddComponent,
    VocherAddListgameComponent,
    VocherDetailComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GamesManagementModule { }
