import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: string;
  password: string;

  constructor(private menu: MenuController, private router: Router) { }

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
    }
  }

}
