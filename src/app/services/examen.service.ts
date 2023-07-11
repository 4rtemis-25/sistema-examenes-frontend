import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http:HttpClient) { }

  public listarExamenes(){
    return this.http.get(`${baserUrl}/examenes/`)
  }

  public agregarExamen(examen:any){
    return this.http.post(`${baserUrl}/examenes/`, examen)
  }

  public eliminarExamen(examenId:any){
    return this.http.delete(`${baserUrl}/examenes/${examenId}`);
  }
}
