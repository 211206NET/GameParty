import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private auth: AuthService) { }

  logIn() {
    this.auth.loginWithRedirect();
  }

  logOut() {
    this.auth.logout();
  }

  loggedIn: boolean = false;

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isLoggedIn) =>
    {
      this.loggedIn = isLoggedIn;
    })
  }

}