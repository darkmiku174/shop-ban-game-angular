import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from "../../../services/product.service";
import { CollectionService } from "../../../services/collection.service"
import { Product } from "../../../models/products.model";
import { Collection } from "../../../models/collections.model";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {
  public data: any;
  public products: Product[];
  public collections: Collection[];
  public collection: Collection;
  public subscription: Subscription = new Subscription();
  public totalLength: any;
  public page: number = 1;
  public check: boolean[];
  constructor(
    public activetedRoute: ActivatedRoute,
    public productService: ProductService,
    public collectionService: CollectionService,
    public routerService: Router) { }

  ngOnInit(): void {
    this.loadCollections();
    this.activetedRoute.queryParams.subscribe(data => {
      if (data['collection'] != "") {
        this.loadCollection(data['collection']);
      } else {
        this.loadData();
      }
    })

  }
  loadData(): void {
    this.subscription = this.productService.getAllProducts().subscribe(data => {
      this.products = data;
      this.totalLength = data.length;
    }, error => {
      console.log(error);
    })
  }
  loadCollection(id: string): void {
    this.subscription = this.collectionService.getCollectionById(id).subscribe(data => {
      this.collection = data;
      this.products = data.list_game;
      this.totalLength = data.list_game.length;
    }, error => {
      console.log(error);
    })
  }
  loadCollections(): void {
    this.subscription = this.collectionService.getAllCollections().subscribe(data => {
      this.collections = data;
    }, error => {
      console.log(error);
    })
  }
  navigate(id: string): void {
    this.routerService.navigateByUrl("games/" + id);
  }
  onChange(id: string): void {
    this.routerService.navigate(["search/"], { queryParams: { collection: id, name: "" } });
  }
  setTotalPage(n: number): void {
    this.totalLength = n;
  }
}
