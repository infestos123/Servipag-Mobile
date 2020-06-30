import { AppRequest } from './../models/appmovilservipag.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppMovilServipagService {

  baseUrl = 'https://ww5.servipag.com/ApiGateway/Service.svc/help/operations/AppMovilServipag';
  // testUrl = 'https://reqres.in/api/users?page=2';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getRegistroClientes(body: AppRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getExisteCliente(body: AppRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getListadoRegiones(body: AppRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getObtieneComunas(body: AppRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getInscribirCuentas(body: AppRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getEmpresas(body: AppRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getServicios(body: any): Observable<any> {
    return this.http.post(this.baseUrl, JSON.stringify(body), this.httpOptions);
  }
  getModificaCuentasInscritas(body: AppRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getEliminarCuentasInscritas(body: AppRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getModificarClave(body: AppRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getObtenerClave(body: AppRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getPagarBoleta(body: AppRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getEstadoPago(body: AppRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getObtieneComprobante(body: AppRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }

  // getUserTest(): Observable<any> {
  //   return this.http.get(this.testUrl);
  // }

}
