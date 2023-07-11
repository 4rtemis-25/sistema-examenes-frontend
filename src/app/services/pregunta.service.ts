import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http:HttpClient) { }

  public listarPreguntasExamen(examenId:any){
    return this.http.get(`${baserUrl}/preguntas/examen/all/${examenId}`);
  }

  public guardarPregunta(pregunta:any){
    return this.http.post(`${baserUrl}/preguntas/`, pregunta)
  }

  public eliminarPregunta(preguntaId:any){
    return this.http.delete(`${baserUrl}/preguntas/${preguntaId}`)
  }

  public actualizarPregunta(pregunta:any){
    return this.http.put(`${baserUrl}/preguntas/`, pregunta)
  }

  public obtenerPregunta(preguntaId:any){
    return this.http.get(`${baserUrl}/preguntas/${preguntaId}`)
  }
}
