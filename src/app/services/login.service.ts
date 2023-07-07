import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient, private router:Router) { }

  //TRAER EL TOKEN

  public generateToken(loginData:any){
    return this.http.post(`${baserUrl}/generate-token`, loginData)
  }

    //INICIAMOS SESION Y ESTABLECEMOS EL TOKEN EN EL LOCALSTORAGE

    public loginUser(token:any){

      localStorage.setItem('token', token);
    }

    public isLoggedIn() {
      let tokenStr = localStorage.getItem('token');
      if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
        return false;
      } else {
        return true;
      }
    }

    //CERRAMOS LA SESION Y ELIMINAMOS EL TOKEN DEL LOCALSTORAGE

    public logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.router.navigate(['login'])
    }

    //OBTENEMOS EL TOKEN

    public getToken() {
      return localStorage.getItem('token')
    }

    public setUser(user:any){
      localStorage.setItem('user', JSON.stringify(user))
    }

    public getUser(){
      let userStr = localStorage.getItem('user');
      if(userStr != null){
        return JSON.parse(userStr);
      } else {
        this.logout();
        return null;
      }
    }

    public getUserRole() {
      let user = this.getUser();
      return user.authorities[0].authority;
    }

    public getCurrentUser(){
      return this.http.get(`${baserUrl}/actual-usuario`)
    }

}
