import { AdapterApiService } from '../@core/utils/adapter-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  private mac = '623846238';
  private Keyinicial = '0iZguBMOZ6IUYxMwfn70v+k5aXAPL0CG0YY1MESuHXs=';
  private ivBase64 = 'b9ix1/HLZ7z3S3FnOUM9oA==';
  private date = new Date();

  constructor(private adapter: AdapterApiService) { }

  ngOnInit() {
  }


  submitRegistro() {

    const secureKey = 'DvssLRu2VJUYn9rHpB3TFjoOFa7OBnbT9w51R+KNBTTPdRyfHy9++F0ijQzNA4o2jo96tkh2VN6ALOsArUQYRg==';

    const hash_mac = '' + this.adapter.sing(this.mac, this.Keyinicial);

    const timestamp = this.getTimestamp();
    const signed = hash_mac + '99' + '1.0' + timestamp;


    const data = {
      body: {
        canal: '99',
        firma: '' + this.adapter.sing(signed, this.Keyinicial),
        mac: hash_mac,
        so: 'Android',
        version_app: '1.0',
        version_so: '9'
      },
      header: {
        fecha: '201910141042740776-03:00:00'
      }
    };

    this.adapter.llamadaRegistro(data).subscribe((response) => {
      console.log(response);
    });

  }

  submitToken() {

    const body = {
      body: {
        solicita_token: 'YkXtbYHNtAHF3ja0/113qLZhrya3ExxH4KrWUl1G4bkniWikoZnkq4xUOy4ffolHIHUAm/yekwrS4zb1uezdNQ=='
      },
      header: {
        dispositivo: '70401e88-5c3b-46c2-815b-749ba12b724a',
        fecha: '202004091810439000-04:00:00',
        nombre_app: 'APPSERVIPAG',
        version_app: '1.0'
      }
    };

    this.adapter.llamadaToken(body).subscribe((response) => {
      console.log(response);
    });
  }

  submitServicios() {
    //Falta rescatar token 
    const body = {
      body: {
        solicita_token: 'YkXtbYHNtAHF3ja0/113qLZhrya3ExxH4KrWUl1G4bkniWikoZnkq4xUOy4ffolHIHUAm/yekwrS4zb1uezdNQ=='
      },
      header: {
        dispositivo: '70401e88-5c3b-46c2-815b-749ba12b724a',
        fecha: '202004091810439000-04:00:00',
        nombre_app: 'APPSERVIPAG',
        version_app: '1.0'
      }
    };
  }
  getTimestamp() {
    const offset = this.date.getTimezoneOffset();

    const y = this.date.getFullYear().toString();
    let m = (this.date.getMonth() + 1).toString();
    let d = this.date.getDate().toString();
    (d.length == 1) && (d = '0' + d);
    (m.length == 1) && (m = '0' + m);
    const fecha = y + m + d;

    return fecha + offset;
  }
}
