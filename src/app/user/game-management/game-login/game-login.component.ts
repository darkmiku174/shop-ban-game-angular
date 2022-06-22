import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GoogleSiginService } from '../../../services/google-signin.service'
@Component({
  selector: 'app-game-login',
  templateUrl: './game-login.component.html',
  styleUrls: ['./game-login.component.css']
})
export class GameLoginComponent implements OnInit {
  user: gapi.auth2.GoogleUser;

  constructor(public signInService: GoogleSiginService,
    public ref:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.signInService.observable().subscribe(user => {
      this.user = user;
      this.ref.detectChanges();
    })
  }
  signIn(): void {
    this.signInService.signIn();
  }
  signOut(): void {
    this.signInService.signOut();
  }
}
