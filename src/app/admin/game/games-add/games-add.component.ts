import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products.class';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-games-add',
  templateUrl: './games-add.component.html',
  styleUrls: ['./games-add.component.css']
})
export class GamesAddComponent implements OnInit {


  public products: Product[] = [];
  public product: Product = {
    name: '',
    shortName: '',
    type: '',
    title: '',
    description: '',
    developer: '',
    publisher: '',
    release_date: '',
    platform: '',
    purchase_price: 0,
    discount_price: 0,
    sale_price: 0,
    tag: [],
    keys: [],
    images: [],
    videos: [],
    includes: [],
    included_in: [],
    _id: undefined
  };

  public subcription: Subscription = new Subscription;

  constructor(public productsService: ProductsService) {

  }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.subcription = this.productsService.getAll().subscribe(data => {
      this.products = data;
    }, error => {
      this.productsService.handelErro(error);
    })
  }
  ngOnDestroy() {
    if (this.subcription) {
      this.subcription.unsubscribe();
    }
  }
  onAddproduct() {
    // let product = new products(this.name, this.short_name, this.type, this.description, this.developer, this.publisher, this.release_date,
    //   this.platform, , this.discount_price,this.sale_price,this.sale_price);
    this.subcription = this.productsService.addProduct(this.product).subscribe(data => {
      console.log(data)
      this.products.push(data);
    }, error => {
      this.productsService.handelErro(error);
    })

  }
}