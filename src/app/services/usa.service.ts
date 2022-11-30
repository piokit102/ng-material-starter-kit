import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {USaModel} from "../models/usa.model";

@Injectable()
export class USaService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: string): Observable<USaModel>{
    return this._httpClient.get<USaModel>('https://api.genderize.io/?name='+id);
  }
}
