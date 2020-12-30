import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import {LoginService} from './services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'shopshare';

  user: any;
  loggedIn: any;

  ngOnInit() {
    this.user = this.ls.checkLoginStatus();
  }

  constructor(private authService: SocialAuthService, private ls: LoginService, private router: Router) { }

  signInWithFB(): void {
   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(Response => {
     console.log(Response);
     if(Response?.id) {
      this.user = Response;
      this.ls.setUser(Response);
      this.router.navigateByUrl('seller-portal');
    }
   });
  }

  signOut(): void {
    // this.authService.signOut();
    this.user = {};
    this.ls.logout();
    this.router.navigateByUrl('');
  }

  home(): void {
    this.router.navigateByUrl('');
  }
  sellerPortal(): void {
    this.router.navigateByUrl('seller-portal');
  }

}
