import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameLoginComponent } from '../game-login/game-login.component';

@Component({
  selector: 'app-game-payment',
  templateUrl: './game-payment.component.html',
  styleUrls: ['./game-payment.component.css']
})
export class GamePaymentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(GameLoginComponent);
  }

}
