import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AES256 } from '@ionic-native/aes-256/ngx';


import { IRegistroFirma } from '../models/registro-firma.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroFirmaService {

  url = 'https://ww5.servipag.com/ApiGateway/Service.svc/RegistroApp';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  secureKey: string;
  secureIV: string;
  date = new Date();

  constructor(private http: HttpClient, private aes256: AES256) {
    this.generateSecureKeyAndIV();
  }

  async generateSecureKeyAndIV() {
    this.secureIV = await this.aes256.generateSecureIV('b9ix1/HLZ7z3S3FnOUM9oA=='); // Returns a 16 bytes string
  }

  registerApp(data: IRegistroFirma): Observable<any> {
    return this.http.post(this.url, JSON.stringify(data), this.httpOptions);
  }

  encrypt(signedInfo, keyBase64) {

    this.aes256.generateSecureKey(keyBase64)
      .then(
        res => {
          console.log('Secure Key : ', res);
          this.secureKey = res;

          this.aes256.encrypt(this.secureKey, this.secureIV, signedInfo)
            // tslint:disable-next-line: no-shadowed-variable
            .then(res => {
              return res;
            }
            )
            .catch((error: any) => { console.error(error); return 0; });
        }
      )
      .catch((error: any) => { console.error(error); return 0; });
  }

  getTimestamp() {
    const offset = this.date.getTimezoneOffset();

    const y = this.date.getFullYear().toString();
    let m = (this.date.getMonth() + 1).toString();
    let d = this.date.getDate().toString();
    if (d.length === 1) { d = '0' + d; }
    if (m.length === 1) { m = '0' + m; }
    const fecha = y + m + d;

    return fecha + offset;
  }

}
