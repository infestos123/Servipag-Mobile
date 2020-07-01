import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutopistasPageRoutingModule } from './autopistas-routing.module';

import { AutopistasPage } from './autopistas.page';
import { HeaderComponent } from './../../components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutopistasPageRoutingModule
  ],
  declarations: [AutopistasPage, HeaderComponent]
})
export class AutopistasPageModule { }
