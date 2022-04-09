import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Debt } from '../models/debt';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  href = "http://localhost:8080";

  apiUrl =  environment.API_URL+"debt";

  constructor(protected _http: HttpClient) {
  }

  getBalance(): Observable<number> {
    const requestUrl = `${this.apiUrl}/balance`;
    return this._http.get<number>(requestUrl)
  }

  postDebt(body: Debt): Observable<Debt> {
    console.log("postDebt")
    const requestUrl = `${this.apiUrl}`;
    return this._http.post<Debt>(requestUrl,body)
  }

  putDebt(body: Debt): Observable<Debt> {
    const requestUrl = `${this.apiUrl}`;
    return this._http.put<Debt>(requestUrl,body)
  }

  deleteDebt(id:number): Observable<Debt> {
    const requestUrl = `${this.apiUrl}/${id}`;
    return this._http.delete<any>(requestUrl)
  }

  getDebts(): Observable<Debt[]> {
    const requestUrl = `${this.apiUrl}`;
    return this._http.get<Debt[]>(requestUrl)
  }
}
