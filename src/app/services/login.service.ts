import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoginModel} from "../models/login.model";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {
  constructor(private _httpClient: HttpClient) {
  }

  create(login: Omit<LoginModel, 'id'>): Observable<LoginModel>{
    return this._httpClient.post<LoginModel>('https://fakestoreapi.com/auth/login', login);
  }

}
