import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoginService} from './login.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private ls: LoginService) { }

  getPages() {
    let access_token = 'EAAGYlEpWIHoBAFZCnh0HWnlcAKprJWE8MGW9mc91uGnrVlxqFC7kSevFISDrd4xsdkYaMVrypMnkAV36isGxcXld7EkLaZAhu96xOfo99NeOZA3RZCKz6WPDGTD0R8lSuWL9SBgh42cG2zaPhwi4UURTpQ6MuaRdgEUMHn6BCQZDZD'
    return this.http.get(`https://graph.facebook.com/${this.ls.getUser().id}/accounts?access_token=${access_token}`)
  }
}
