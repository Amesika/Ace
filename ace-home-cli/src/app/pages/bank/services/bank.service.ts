import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Bank } from '../models/bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  apiUrl =  environment.API_URL+"bank";

  constructor(protected _http: HttpClient) {
  }

  postBank(body: Bank): Observable<Bank> {
    console.log("postBank")
    const requestUrl = `${this.apiUrl}`;
    return this._http.post<Bank>(requestUrl,body)
  }

  putBank(body: Bank): Observable<Bank> {
    const requestUrl = `${this.apiUrl}`;
    return this._http.put<Bank>(requestUrl,body)
  }

  deleteBank(id:number): Observable<Bank> {
    const requestUrl = `${this.apiUrl}/${id}`;
    console.log(requestUrl);
    return this._http.delete<any>(requestUrl)
  }

  getBank(id:number): Observable<Bank> {
    const requestUrl = `${this.apiUrl}/${id}`;
    console.log(requestUrl);
    return this._http.get<any>(requestUrl)
  }


  getBanks(): Observable<Bank[]> {
    const requestUrl = `${this.apiUrl}`;
    return this._http.get<Bank[]>(requestUrl)
  }
}
