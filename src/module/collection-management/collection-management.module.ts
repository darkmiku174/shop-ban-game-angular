import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { CollectionManagementComponent } from './components/collection-management/collection-management.component';
import { CollectionAddListgameComponent } from './components/collection-add-listgame/collection-add-listgame.component';
import { CollectionDetailComponent } from './components/collection-detail/collection-detail.component';
import { CollectionAddComponent } from './components/collection-add/collection-add.component';
//Services
import { collectionRoutes } from './collection-management.routes';

@NgModule({
  declarations: [
    CollectionManagementComponent,
    CollectionAddListgameComponent,
    CollectionDetailComponent,
    CollectionAddComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GamesManagementModule { }
