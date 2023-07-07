import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as AppUtil from '../app.util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  Url="http://localhost:8086/api/auth"
  headers=new HttpHeaders().set('content-Type','applictaion/json');

  constructor(private bostagi: HttpClient,private router:Router) {}

  register(user):Observable<any>{
    let url=`${this.Url}/register`;

    return this.bostagi.post<{data:any}>(url,user);
  }
  login(user):Observable<any>{
    let url=`${this.Url}/login`;
    return this.bostagi.post(url,user);
    
  
}
saveUserDate(token,user) {
  localStorage.setItem(AppUtil.AUTH_TOKEN, token);
  localStorage.setItem(AppUtil.USER_INFO, JSON.stringify(user));
}
isLoggedIn() :boolean {
  //just for check token exist
   return !!localStorage.getItem(AppUtil.AUTH_TOKEN);

 }
  getToken(): string {
  return localStorage.getItem(AppUtil.AUTH_TOKEN);
}
 logOut() {
  localStorage.removeItem(AppUtil.AUTH_TOKEN);
  localStorage.removeItem(AppUtil.USER_INFO);
  this.router.navigateByUrl('/login')
}

getCurrentUser() {
  return JSON.parse(localStorage.getItem(AppUtil.USER_INFO));

}
}