import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products.class';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public data: any;
  public products: Product[] = [];
  public subcription: Subscription = new Subscription;
  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.subcription = this.productsService.getAll().subscribe(data => {
      this.products = data;

    }, error => {
      this.productsService.handelErro(error);
    })
  }

}
