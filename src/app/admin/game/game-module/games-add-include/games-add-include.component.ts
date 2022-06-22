import { Component, EventEmitter, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/products.class';
import { ProductsService } from 'src/app/services/products.service';
import { Output } from '@angular/core';
@Component({
  selector: 'app-games-add-include',
  templateUrl: './games-add-include.component.html',
  styleUrls: ['./games-add-include.component.css']
})
export class GamesAddIncludeComponent implements OnInit {
  @Output() IncludeList = new EventEmitter<Product>();
  public includeList: Array<Product> = [];
  public data: any;
  public products: Product[] = [];
  public subcription: Subscription = new Subscription;
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
    includes: this.includeList,
    included_in: [],
    _id: undefined
  };



  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.subcription = this.productsService.getAll().subscribe(data => {
      this.products = data;

    }, error => {
      this.productsService.handelErro(error);
    })
  }

  onAddInclude(product: Product) {
    this.IncludeList.emit(product);
    this.includeList.push(product);
    console.log(this.includeList)
  }

  onAddProduct() {
    this.subcription = this.productsService.addProduct(this.product).subscribe(data => {
      console.log(data)
      this.products.push(data);
    }, error => {
      this.productsService.handelErro(error);
    })

  }
}
