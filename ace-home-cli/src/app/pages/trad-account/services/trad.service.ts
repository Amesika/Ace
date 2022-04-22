import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TradAccountSold } from '../models/trading-account';

@Injectable({
  providedIn: 'root'
})
export class TradService {

  apiUrl =  environment.API_URL+"trading-account";

  constructor(protected _http: HttpClient) {
  }

  getTradinAccWithSold(): Observable<TradAccountSold[]> {
    const requestUrl = `${this.apiUrl}/sold-details`;
    return this._http.get<TradAccountSold[]>(requestUrl)
  }

  getTotalSold(): Observable<number> {
    const requestUrl = `${this.apiUrl}/sold`;
    return this._http.get<number>(requestUrl)
  }
}
