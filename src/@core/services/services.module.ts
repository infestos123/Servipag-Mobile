import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { AppMovilServipagService } from './app-movil-servipag.service';


@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    exports: [AppMovilServipagService],
    providers: [AppMovilServipagService],
})
export class ServiceModule { }
