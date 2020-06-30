import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AES256 } from '@ionic-native/aes-256/ngx';
import { AdapterApiService } from '../utils/adapter-api.service';
@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    exports: [AdapterApiService],
    providers: [AES256, AdapterApiService],
})
export class UtilsModule { }
