import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AES256 } from '@ionic-native/aes-256/ngx';
import { RegistroFirmaService } from './registro-firma.service';
import { TokenService } from './token.service';



@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    exports: [RegistroFirmaService, TokenService],
    providers: [RegistroFirmaService, AES256, TokenService],
})
export class UtilsModule { }
