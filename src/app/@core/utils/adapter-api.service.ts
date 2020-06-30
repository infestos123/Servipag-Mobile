import { AppRequest } from './../models/appmovilservipag.model';
import { RegistroAppRequest } from './../models/registro-app.model';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { AES256 } from '@ionic-native/aes-256/ngx';

import { AutorizarRequest, AutorizarResponse } from './../models/autorizar.model';


@Injectable({
  providedIn: 'root'
})
export class AdapterApiService {

  base_registro = 'https://ww5.servipag.com/ApiGateway/Service.svc/RegistroApp';
  base_token = 'https://ww5.servipag.com/ApiGateway/Service.svc/Autorizar';
  base_servicio = 'https://ww5.servipag.com/ApiGateway/Service.svc/AppMovilServipag';


  private secureKey: string;
  private secureIV: string;


  constructor(private http: HttpClient, private aes256: AES256) {
    this.generateSecureKeyAndIV();
  }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  llamadaRegistro(data: RegistroAppRequest) {
    return this.http
      .post(this.base_registro + '/', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  llamadaToken(data: AutorizarRequest) {
    return this.http
      .post(this.base_token + '/', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  llamadaServicio(data: AppRequest) {
    return this.http
      .post(this.base_servicio + '/', JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  async generateSecureKeyAndIV() {
    this.secureIV = await this.aes256.generateSecureIV('b9ix1/HLZ7z3S3FnOUM9oA=='); // Returns a 16 bytes string
  }

  public sing(signedInfo, keyBase64) {

    this.aes256.generateSecureKey(keyBase64)
      .then(
        res => {
          console.log('Secure Key : ', res);
          this.secureKey = res;

          this.aes256.encrypt(this.secureKey, this.secureIV, signedInfo)
            .then(
              res => {
                return res;
              }//console.log('Encrypted Data: ',res) 
            )
            .catch((error: any) => { console.error(error); return 0; });
        }
      )
      .catch((error: any) => { console.error(error); return 0; });
  }
}
