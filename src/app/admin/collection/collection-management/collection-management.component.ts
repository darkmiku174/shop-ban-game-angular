import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Collection } from 'src/app/models/collection.class';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection-management',
  templateUrl: './collection-management.component.html',
  styleUrls: ['./collection-management.component.css']
})
export class CollectionManagementComponent implements OnInit {

  public collections: Collection[] = [];
  public subcription: Subscription = new Subscription;

  constructor(public collectionService: CollectionService) {

  }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.subcription = this.collectionService.getAll().subscribe(data => {
      this.collections = data;
    }, error => {
      console.log(error);
    })
  }
  ngOnDestroy() {

  }
}
