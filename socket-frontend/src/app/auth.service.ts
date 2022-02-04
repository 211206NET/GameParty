import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$: any;
  logout() {
    throw new Error('Method not implemented.');
  }
  loginWithRedirect() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
