import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module'
import { AppComponent } from './app.component';
import { ProductService } from './services/product.service';
import { CollectionService } from './services/collection.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SharedModule } from './shared.module';
import { GameManagementModule } from './user/game-management.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    AppComponent,
    routingComponents,

  ],
  imports: [
    GameManagementModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule
    // ProductManagementModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService, CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
