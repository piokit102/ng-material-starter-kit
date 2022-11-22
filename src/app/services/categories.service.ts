import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CategoryModel} from "../models/category.model";
import {Observable} from "rxjs";


@Injectable()
export class CategoriesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CategoryModel[]> {
    return this._httpClient.get<CategoryModel[]>('https://fakestoreapi.com/products/categories');


  }
}
