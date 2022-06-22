import { Component, OnInit } from '@angular/core';
import { Product } from "../../../models/products.model";

@Component({
  selector: 'app-game-payment',
  templateUrl: './game-payment.component.html',
  styleUrls: ['./game-payment.component.css']
})
export class GamePaymentComponent implements OnInit {
  public cart: [{ product: Product, count: number }];
  constructor() { }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }
  totalPrice(): string {
    var result = 0;
    this.cart.forEach(game => {
      result += game.product.sale_price * game.count;
    })
    return "$" + result;
  }
}
