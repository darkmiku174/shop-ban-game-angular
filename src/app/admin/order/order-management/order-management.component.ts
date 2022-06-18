import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order.class';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit {

  public orders: Order[] = [];
  public subcription: Subscription = new Subscription;

  constructor(public orderService: OrderService) {

  }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.subcription = this.orderService.getAll().subscribe(data => {
      this.orders = data;
    }, error => {
      console.log(error);
    })
  }
  ngOnDestroy() {

  }
}
