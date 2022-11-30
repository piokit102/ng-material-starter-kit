import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {CatsFactsModel} from "../models/cats-facts.model";

@Injectable()
export class CatsFactsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CatsFactsModel> {
    return this._httpClient.get<CatsFactsModel>('https://catfact.ninja/fact');
  }
}
