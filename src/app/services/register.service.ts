import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {RegisterModel} from "../models/register.model";

@Injectable()
export class RegisterService {
  constructor(private _httpClient: HttpClient) {
  }

  create(dane: { password: any; address: any; phone: any; name: any; email: any; username: any }): Observable<RegisterModel>{
    return this._httpClient.post<RegisterModel>('https://fakestoreapi.com/users',dane)
  }
}
