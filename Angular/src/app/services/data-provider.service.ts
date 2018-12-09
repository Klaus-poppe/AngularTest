import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http:HttpClient) { }

  res:any;
  baseUrl = 'http://localhost:8080/users/';
  
  
  getLoginDetailsUsingUname(uname)
  {
    let url = this.baseUrl+uname;
    console.log(url);
    return this.http.get(url);
  }

  registerUser(user)
  {
    let url = this.baseUrl+"register";
    console.log(user);
    console.log(url);
    console.log(this.http.post(url, user));
    return this.http.post(url, user);
  }
}
