import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from "../../../services/product.service";
import {Product} from "../../../models/products.model";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
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
  handleCarouselEvents(event: any) {
    console.log(event);
  }
}

