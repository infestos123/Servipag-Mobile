import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPagePageRoutingModule } from './main-page-routing.module';

import { MainPagePage } from './main-page.page';
import { HeaderComponent } from './../../components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPagePageRoutingModule
  ],
  declarations: [MainPagePage, HeaderComponent]
})
export class MainPagePageModule {}
