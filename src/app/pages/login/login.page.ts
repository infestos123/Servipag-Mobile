import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AppMovilServipagService } from '../../@core/services/app-movil-servipag.service';
import { request } from './../../@core/mocks/requestService.mock';


@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string;
  password: string;

  result: any;

  constructor(
    private menu: MenuController,
    private router: Router,
    private api: AppMovilServipagService,
  ) { }

  ngOnInit(): void {
    this.api.getServicios(request).subscribe(data => {
      this.result = data;
    });
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

  goApi(){
    this.router.navigate(['/api']);
  }
  
  goToAutopistasPage(){
    
    this.router.navigate(['/autopistas']);
  }
}
