import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models/activity';
import { environment } from 'src/environments/environment';
import { TradAccountSold } from '../models/trading-account';
import { TradAccountState } from '../models/trading-account-state';

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

  getTradinAccActivities(id: number): Observable<Activity[]>{
    const requestUrl = `${this.apiUrl}/${id}/activities`;
    return this._http.get<Activity[]>(requestUrl)
  }

  getTradinAccState(): Observable<TradAccountState[]>{
    const requestUrl = `${this.apiUrl}/state`;
    return this._http.get<TradAccountState[]>(requestUrl)
  }

  getTradinAccStateById(id: number): Observable<TradAccountState[]>{
    const requestUrl = `${this.apiUrl}/state/${id}`;
    return this._http.get<TradAccountState[]>(requestUrl)
  }
}
