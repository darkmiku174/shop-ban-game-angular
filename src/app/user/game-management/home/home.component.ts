import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameLoginComponent } from '../game-login/game-login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  handleCarouselEvents(event: any) {
    console.log(event);
  }
  openDialog() {
    this.dialog.open(GameLoginComponent);
  }
}
