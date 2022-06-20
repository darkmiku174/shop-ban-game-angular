import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameLoginComponent } from '../game-login/game-login.component';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  openDialog(){
    this.dialog.open(GameLoginComponent);
  }

  ngOnInit(): void {
  }

}
