import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products.class';

@Component({
  selector: 'app-games-management',
  templateUrl: './games-management.component.html',
  styleUrls: ['./games-management.component.css']
})
export class GamesManagementComponent implements OnInit {

  public products: Product[] = [];
  public subcription: Subscription = new Subscription;

  constructor(public productsService: ProductsService) {

  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.subcription = this.productsService.getAll().subscribe(data => {
      this.products = data;
    }, error => {
      this.productsService.handelErro(error);
    })
  }

  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
  onDeleteProduct(_id: string) {
    this.subcription = this.productsService.deleteProduct(_id).subscribe(data => {
      console.log(data);
    })
  }


}
