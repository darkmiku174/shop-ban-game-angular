import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from "../../../services/product.service";
import { Product } from "../../../models/products.model";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';
@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  public cart: [{ product: Product, count: number }];
  public product: Product;
  public subscription: Subscription = new Subscription();

  constructor(
    public activetedRoute: ActivatedRoute,
    public productService: ProductService,
    public routerService: Router,
  ) { }
  ngOnInit(): void {
    this.loadData(this.activetedRoute.snapshot.params['id']);
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }
  loadData(id: string): void {
    this.subscription = this.productService.getProductById(id).subscribe(data => {
      this.product = data;
    }, error => {
      console.log(error);
    })
  }
  nagivate(id: string): void {
    this.routerService.navigateByUrl("games/" + id).then(() => { this.ngOnInit(); });

  }
  showCountKey(): number {
    var result: number = 0;
    this.product.keys.forEach(key => {
      if (key.status) {
        result++;
      }
    });
    return result;
  }
  handleCarouselEvents(event: any) {
    console.log(event);
  }
  addToCart(): void {
    for (let index = 0; index < this.cart.length; index++) {
      if (this.cart[index].product._id === this.product._id) {
        this.cart[index] = { product: this.cart[index].product, count: this.cart[index].count + 1 <= this.checkLimitCount(this.cart[index].product) ? this.cart[index].count + 1 : this.cart[index].count };
        localStorage.setItem("cart", JSON.stringify(this.cart));
        return;
      }
    }
    this.cart.push({ product: this.product, count: 1 });
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
  checkLimitCount(product: Product): number {
    var result: number = 0;
    product.keys.forEach(key => {
      if (key.status) {
        result++;
      }
    });
    return result;
  }
  showCountInCart(id: string): number {
    var result: number = 0;
    this.cart.forEach(game => {
      if (game.product._id === id) {
        result = game.count;
      }
    })
    return result;
  }
}

