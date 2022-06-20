import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameLoginComponent } from '../game-login/game-login.component';
import { Collection } from "../../../models/collections.model";
import { CollectionService } from 'src/app/services/collection.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  public topSaleCollection: Collection;
  public newReleaseCollection: Collection;
  public subscription: Subscription = new Subscription();

  constructor(public dialog: MatDialog,
    public collectionService: CollectionService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    this.getTopSale();
    this.getNewRelease();
  }
  getTopSale(): void {
    this.subscription = this.collectionService.getTopSaleCollection().subscribe(data => {
      this.topSaleCollection = data;
    }, error => {
      console.log(error);
    })
  }
  getNewRelease(): void {
    this.subscription = this.collectionService.getNewReleaseCollection().subscribe(data => {
      this.newReleaseCollection = data;
    }, error => {
      console.log(error);
    })
  }
  show(): void {

  }
  handleCarouselEvents(event: any) {
    console.log(event);
  }
  openDialog() {
    this.dialog.open(GameLoginComponent);
  }
}
