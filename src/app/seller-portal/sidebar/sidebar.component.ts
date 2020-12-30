import { Component, Input, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() link;
  user: any;
  constructor(private ls: LoginService) { }

  ngOnInit(): void {
    this.user = this.ls.getUser();
    console.log(this.link);
  }

}
