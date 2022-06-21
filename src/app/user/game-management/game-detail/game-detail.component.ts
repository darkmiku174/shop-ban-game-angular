import { Component, OnInit} from '@angular/core';
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
  public product: Product;
  public subscription: Subscription = new Subscription();

  constructor(
    public activetedRoute: ActivatedRoute,
    public productService: ProductService,
    public routerService: Router,
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
  nagivate(id: string): void {
    this.routerService.navigateByUrl("games/" + id).then(() => { this.ngOnInit(); });

  }
  showCountKey(): number {
    var result: number = 0;
    this.product.keys.forEach(key => {
      if (key.status) {
        result ++;
      }
    });
    return result;
  }
  handleCarouselEvents(event: any) {
    console.log(event);
  }
}

