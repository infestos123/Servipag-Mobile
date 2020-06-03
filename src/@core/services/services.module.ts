import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppMovilServipagService } from './app-movil-servipag.service';
import { AutopistaService } from './autopista.service';


@NgModule({
    declarations: [],
    imports: [CommonModule, HttpClientModule],
    exports: [AppMovilServipagService, AutopistaService],
    providers: [AppMovilServipagService, AutopistaService],
})
export class ServiceModule { }
