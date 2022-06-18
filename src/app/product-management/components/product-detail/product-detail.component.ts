import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from "../../../services/product.service";
import {Product} from "../../../models/products.model";
import {Subscription} from "rxjs";
@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  public subscription: Subscription =new Subscription();
  constructor(
    public activetedRoute: ActivatedRoute,
    public productService: ProductService
  ) { }

  ngOnInit(): void {
    this.loadData(this.activetedRoute.snapshot.params['id'])
  }
  loadData(id: string): void {
    this.subscription = this.productService.getProductById(id).subscribe(data => {
      this.product = data;
    }, error => {
      console.log(error);
    })
  }
}
