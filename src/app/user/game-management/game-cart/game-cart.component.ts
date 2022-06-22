import { Component, OnInit } from '@angular/core';
import { Product } from "../../../models/products.model";
import { Router } from '@angular/router';
@Component({
  selector: 'app-game-cart',
  templateUrl: './game-cart.component.html',
  styleUrls: ['./game-cart.component.css']
})
export class GameCartComponent implements OnInit {
  public cart: [{ product: Product, count: number }];
  constructor(public routerService: Router) { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }
  increaseCount(index: number): void {
    this.cart[index] = { product: this.cart[index].product, count: this.cart[index].count + 1 <= this.checkLimitCount(this.cart[index].product) ? this.cart[index].count + 1 : this.cart[index].count };
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
  decreaseCount(index: number): void {
    this.cart[index] = { product: this.cart[index].product, count: this.cart[index].count - 1 >= 1 ? this.cart[index].count - 1 : 1 };
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
  totalPrice(): string {
    var result = 0;
    this.cart.forEach(game => {
      result += game.product.sale_price * game.count;
    })
    return "$" + result;
  }
  nagivate(): void {
    this.routerService.navigateByUrl("payment");
  }
}
