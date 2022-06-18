import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart.class';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-management',
  templateUrl: './cart-management.component.html',
  styleUrls: ['./cart-management.component.css']
})
export class CartManagementComponent implements OnInit {

  public carts: Cart[] = [];
  public subcription: Subscription = new Subscription;

  constructor(public cartService: CartService) {

  }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.subcription = this.cartService.getAll().subscribe(data => {
      this.carts = data;
    }, error => {
      console.log(error);
    })
  }
  ngOnDestroy() {

  }
}
