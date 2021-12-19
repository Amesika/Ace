import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  href = "http:localhost:8080";
  apiUrl = '/api/activity'

  constructor(protected _http: HttpClient) {
  }

  getBalance(): Observable<any> {
    const requestUrl = `${this.href}${this.apiUrl}`;
    return this._http.get<any>(requestUrl)
  }
}
