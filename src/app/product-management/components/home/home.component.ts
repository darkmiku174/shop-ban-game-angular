import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionService } from '../../../services/collection.service';
import { Subscription } from 'rxjs';
import { Collection } from "../../../models/collections.model"
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public collection: Collection;
  public subscription: Subscription = new Subscription();
  constructor(
    public collectionService: CollectionService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  };
  loadData(): void {
    this.subscription = this.collectionService.getHotCollection().subscribe(data => {
      this.collection = data;
    }, error => {
      console.log(error);
    })
  }

  ngOnDestroy(): void {

  }
}
