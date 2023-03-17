import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployeeRecord } from '../interfaces/i-employee-record';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==";

  constructor(private http:HttpClient) { }

  get():Observable<IEmployeeRecord[]> {
    return this.http.get<IEmployeeRecord[]>(this.url)
  }
}
