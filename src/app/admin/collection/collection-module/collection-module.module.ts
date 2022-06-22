import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Component
import { CollectionManagementComponent } from './collection-management/collection-management.component';
import { CollectionAddComponent } from './collection-add/collection-add.component';
import { CollectionAddListgameComponent } from './collection-add-listgame/collection-add-listgame.component';
import { CollectionDetailComponent } from './collection-detail/collection-detail.component';


@NgModule({
  declarations: [
    CollectionManagementComponent,
    CollectionAddComponent,
    CollectionAddListgameComponent,
    CollectionDetailComponent],
  imports: [
    CollectionManagementComponent,
    CollectionAddComponent,
    CollectionAddListgameComponent,
    CollectionDetailComponent,
    CommonModule
  ]
})
export class CollectionModuleModule { }
