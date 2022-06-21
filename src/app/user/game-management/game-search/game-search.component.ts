import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from "../../../services/product.service";
import { Product } from "../../../models/products.model";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {
  public products: Product[];
  public subscription: Subscription = new Subscription();

  constructor(
    public activetedRoute: ActivatedRoute,
    public productService: ProductService,
    public routerService: Router)
    { }

    ngOnInit(): void {
      this.loadData()
    }
    loadData(): void {
      this.subscription = this.productService.getAllProducts().subscribe(data => {
        this.products = data;
      }, error => {
        console.log(error);
      })
    }

}
