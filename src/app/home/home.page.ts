import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AppMovilServipagService } from '../@core/services/app-movil-servipag.service';
import { RegistroFirmaService } from '../@core/utils/registro-firma.service';
import { request } from '../@core/mocks/requestService.mock';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  user: string;
  password: string;

  result: any;

  constructor(
    private menu: MenuController,
    private router: Router,
    private api: AppMovilServipagService,
    private registroFirrma: RegistroFirmaService
  ) { }

  ngOnInit(): void {
    this.api.getServicios(request).subscribe(data => {
      this.result = data;
    });

    this.registrarApp();

  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  signIn() {
    if (this.user === 'daniel' && this.password === '123') {

      this.router.navigate(['/main-page']);
      this.user = '';
      this.password = '';

    } else {
      this.router.navigate(['/main-page']);

      // TODO: el error no es por el servicio, se debe a la data que se le pasa. Evaluar.
      this.api.getServicios(request).subscribe(data => {
        this.result = data;
      });

      // Code for test :D
      // this.api.getUserTest().subscribe(data => {
      //   this.result = data;
      //   console.log(this.result);
      // });
    }
  }

  registrarApp() {

    const mac = '623846238';
    const channel = '99';
    const keyinicial = '0iZguBMOZ6IUYxMwfn70v+k5aXAPL0CG0YY1MESuHXs=';
    const hashMac = this.registroFirrma.encrypt(mac, keyinicial);
    const versionApp = '1.0';
    const timestamp = this.registroFirrma.getTimestamp();
    const signed = hashMac + channel + versionApp + timestamp;
    const firmaEncrypt = this.registroFirrma.encrypt(signed, keyinicial);

    const data: any = {
      body: {
        canal: channel,
        firma: firmaEncrypt,
        mac: hashMac,
        so: 'Android',
        version_app: versionApp,
        version_so: '9'
      },
      header: {
        fecha: '201910141042740776-03:00:00'
      }
    };

    this.registroFirrma.registerApp(data).subscribe(response => {
      this.result = response;
    });

  }
}
