import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoginService} from './login.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private ls: LoginService) { }

  getPages() {
    return this.http.get(`https://graph.facebook.com/${this.ls.getUser().id}/accounts?access_token=${this.ls.getUser().authToken}`)
  }
}
