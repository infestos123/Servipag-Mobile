import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IAutopistas } from '../models/autopista.models';
import { listAutopistas } from '../mocks/list-autopistas.mocks';

@Injectable({
  providedIn: 'root'
})
export class AutopistaService {

  constructor(private http: HttpClient) { }

  getAutopistas(): Observable<IAutopistas[]> {
    return of(listAutopistas);
  }
}
