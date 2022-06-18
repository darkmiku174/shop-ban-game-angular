import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.class';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  public users: User[] = [];
  public subcription: Subscription = new Subscription;

  constructor(public userService: UserService) {

  }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.subcription = this.userService.getAll().subscribe(data => {
      this.users = data;
    }, error => {
      console.log(error);
    })
  }
  ngOnDestroy() {

  }
}
