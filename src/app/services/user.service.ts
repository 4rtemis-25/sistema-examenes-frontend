import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public añadirUsuario(user:any){
    return this.httpClient.post(`${baserUrl}/usuarios/save`,user)
  }
}


//http://192.168.1.171/sistema-examenes-backend