import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: any;
  constructor() { }
  setUser(userData) {
    this.user = userData;
    localStorage.setItem('user', JSON.stringify(userData));
  }

  getUser() {
    return this.user;
  }
  checkLoginStatus() {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user;
  }
  logout() {
    this.user = {};
    localStorage.clear();

  }

}
