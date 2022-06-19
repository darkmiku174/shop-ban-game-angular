import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents } from './app-routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './product-management/components/home/home.component';
import { ProductService } from './services/product.service';
import { CollectionService } from './services/collection.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SharedModule } from './shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
 
    AppComponent,
    HomeComponent,
    routingComponents
  ],
  imports: [

    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    // ProductManagementModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService, CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
