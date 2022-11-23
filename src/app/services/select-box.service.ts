import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SelectBoxModel} from "../models/select-box.model";

@Injectable()
export class SelectBoxService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<SelectBoxModel[]> {
    return this._httpClient.get<SelectBoxModel[]>('https://date.nager.at/api/v2/publicholidays/2020/US');


  }
}
