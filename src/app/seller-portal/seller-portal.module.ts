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



@NgModule({
  declarations: [
    SellerPortalComponent,
    SidebarComponent,
    SellerHomeComponent,
  ],
  imports: [
    CommonModule,
    SellerPortalRoutingModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [SellerPortalComponent]
})
export class SellerPortalModule {  }
