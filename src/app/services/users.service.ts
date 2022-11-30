import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {UsersModel} from "../models/users.model";

@Injectable()
export class UsersService {


  getOne(id:number): Observable<UsersModel>{
    return this._httpClient.get<UsersModel>('https://fakestoreapi.com/users/'+id)
  }
  constructor(private _httpClient: HttpClient) {
  }
}
