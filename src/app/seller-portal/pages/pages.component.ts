import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiService} from '../../services/api.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  isLoading = true;
  response: any;
  constructor(private http: HttpClient, private api: ApiService) { }

  ngOnInit(): void {
    this.api.getPages().subscribe(data => {
      console.log(data);
      this.response = data;
      this.isLoading = false;
    })
  }

}
