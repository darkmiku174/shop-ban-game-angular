import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './product-management/components/home/home.component';
import { ProductService } from './services/product.service';
import { CollectionService } from './services/collection.service';

import { ProductManagementModule } from './product-management/product-mangement.module'

import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProductManagementModule
    // ProductManagementModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService, CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
