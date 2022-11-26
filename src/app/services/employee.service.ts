import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeModel} from "../models/employee.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class EmployeeService {

  constructor(private _httpClient: HttpClient) {
  }

  create(employee: Omit<EmployeeModel, "id">): Observable<EmployeeModel>{
    return this._httpClient.post<EmployeeModel>('https://dummy.restapiexample.com/api/v1/create', employee);
  }
}
