import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IRequest, IServicesRequest } from '../models/request.models';

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

  getRegistroClientes(body: IRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getExisteCliente(body: IRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getListadoRegiones(body: IRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getObtieneComunas(body: IRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getInscribirCuentas(body: IRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getEmpresas(body: IRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getServicios(body: IServicesRequest): Observable<any> {
    return this.http.post(this.baseUrl, JSON.stringify(body), this.httpOptions);
  }
  getModificaCuentasInscritas(body: IRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getEliminarCuentasInscritas(body: IRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getModificarClave(body: IRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getObtenerClave(body: IRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getPagarBoleta(body: IRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getEstadoPago(body: IRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }
  getObtieneComprobante(body: IRequest): Observable<any> {
    return this.http.post(this.baseUrl, body);
  }

  // getUserTest(): Observable<any> {
  //   return this.http.get(this.testUrl);
  // }

}
