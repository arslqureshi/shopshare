import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerPortalComponent } from './seller-portal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SellerPortalRoutingModule} from './seller-portal-routing.module';
import { SellerHomeComponent } from './seller-home/seller-home.component'
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ButtonModule} from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages/pages.component';
import {SkeletonModule} from 'primeng/skeleton';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    SellerPortalComponent,
    SidebarComponent,
    SellerHomeComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SellerPortalRoutingModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SkeletonModule,
    CardModule
  ],
  bootstrap: [SellerPortalComponent]
})
export class SellerPortalModule {  }
