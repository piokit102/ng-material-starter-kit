import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {CheckboxCategoryModel} from "../models/checkbox-category.model";

@Injectable()
export class CheckboxCategoryService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<CheckboxCategoryModel[]>{
    return this._httpClient.get<CheckboxCategoryModel[]>('https://fakestoreapi.com/products/categories');
  }
}
