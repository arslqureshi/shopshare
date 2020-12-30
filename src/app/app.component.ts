import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import {LoginService} from './services/login.service';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent implements OnInit{
  title = 'shopshare';

  user: any;
  loggedIn: any;

  ngOnInit() {
    this.user = this.ls.checkLoginStatus();
  }

  constructor(
    private authService: SocialAuthService,
    private ls: LoginService,
    private router: Router,
    private toast: MessageService,
  ) { }

  signInWithFB(): void {
    // this.toast.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});

   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(Response => {
     console.log(Response);
     if(Response?.id) {
      this.user = Response;
      this.ls.setUser(Response);
      this.toast.add({severity:'success', summary:'Logged In', detail:'You have succesfully Logged In via Facebook'});
      this.router.navigateByUrl('seller-portal');
    }
   });
  }

  signOut(): void {
    // this.authService.signOut();
    this.user = {};
    this.ls.logout();
    this.toast.add({severity:'success', summary:'Logged Out', detail:'You have succesfully Logged Out'});
    this.router.navigateByUrl('');
  }

  home(): void {
    this.router.navigateByUrl('');
  }
  sellerPortal(): void {
    this.router.navigateByUrl('seller-portal');
  }

}
