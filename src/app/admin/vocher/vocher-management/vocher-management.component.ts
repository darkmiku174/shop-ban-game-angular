import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Vocher } from 'src/app/models/vocher.class';
import { VocherService } from 'src/app/services/vocher.service';

@Component({
  selector: 'app-vocher-management',
  templateUrl: './vocher-management.component.html',
  styleUrls: ['./vocher-management.component.css']
})
export class VocherManagementComponent implements OnInit {

  public vochers: Vocher[] = [];
  public subcription: Subscription = new Subscription;

  constructor(public vocherService: VocherService) {

  }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.subcription = this.vocherService.getAll().subscribe(data => {
      this.vochers = data;
    }, error => {
      console.log(error);
    })
  }
  ngOnDestroy() {

  }
}
