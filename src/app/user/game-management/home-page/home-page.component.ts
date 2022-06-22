import { Component, OnInit, ViewChild } from '@angular/core';
import { Collection } from "../../../models/collections.model";
import { CollectionService } from 'src/app/services/collection.service';
import { Subscription } from "rxjs";
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public id: string;
  public hotCollection: Collection;
  public topSaleCollection: Collection;
  public newReleaseCollection: Collection;
  public mostPopularCollection: Collection;
  public recentUpdateCollection: Collection;
  public subscription: Subscription = new Subscription();
  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;
  constructor(
    public collectionService: CollectionService,
    public routerService: Router) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(): void {
    this.getTopSale();
    this.getNewRelease();
    this.getHot();
    this.getMostPopular();
    this.getRecentlyUpdate();
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
  getHot(): void {
    this.subscription = this.collectionService.getHotCollection().subscribe(data => {
      this.hotCollection = data;
    }, error => {
      console.log(error);
    })
  }
  getMostPopular(): void {
    this.subscription = this.collectionService.getMostPopularCollection().subscribe(data => {
      this.mostPopularCollection = data;
    }, error => {
      console.log(error);
    })
  }
  getRecentlyUpdate(): void {
    this.subscription = this.collectionService.getRecentlyUpdateCollection().subscribe(data => {
      this.recentUpdateCollection = data;
    }, error => {
      console.log(error);
    })
  }
  onSlide(slideEvent: NgbSlideEvent): void {

  }
  selectSlide(id: number): void {

  }
  nagivate(id: string): void {
    this.routerService.navigateByUrl("games/" + id);
  }
  handleCarouselEvents(event: any) {
    console.log(event);
  }
  nagivateToSearch(collection: string): void {
    this.routerService.navigate(['search'], { queryParams: { collection: collection, name: "" } });
  }
}

