import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameLoginComponent } from '../game-login/game-login.component';
import { ProductService } from "../../../services/product.service";
import { Product } from "../../../models/products.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public data: any;
  public products: Product[];
  public subscription: Subscription = new Subscription();
  constructor(
    public dialog: MatDialog,
    public productService: ProductService) { }
  openDialog() {
    this.dialog.open(GameLoginComponent);
  }
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
