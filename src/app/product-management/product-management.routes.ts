import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
const appRoutes: Routes = [
  { path: 'product/:id', component: ProductDetailComponent }
];
@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule {

}
