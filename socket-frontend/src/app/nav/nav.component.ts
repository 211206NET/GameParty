import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
//import { userInfo } from 'os';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(private auth:AuthService) { }
  
  oToList(): void
  {
    
  }
  user: any ={}

  ngOnInit(): void {
    this.auth.user$.subscribe((userInfo: any) => {
      console.log(userInfo);
      this.user =userInfo;
    })
    }

}
