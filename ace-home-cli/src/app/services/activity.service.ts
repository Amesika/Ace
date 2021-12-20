import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  href = "http://localhost:8080";
  apiUrl = '/api/activity'

  constructor(protected _http: HttpClient) {
  }

  getBalance(): Observable<number> {
    const requestUrl = `${this.href}${this.apiUrl}/balance`;
    return this._http.get<number>(requestUrl)
  }

  postActivity(body: Activity): Observable<Activity> {
    console.log("postActivity")
    const requestUrl = `${this.href}${this.apiUrl}`;
    return this._http.post<Activity>(requestUrl,body)
  }

  putActivity(body: Activity): Observable<Activity> {
    const requestUrl = `${this.href}${this.apiUrl}`;
    return this._http.put<Activity>(requestUrl,body)
  }

  deleteActivity(id:number): Observable<Activity> {
    const requestUrl = `${this.href}${this.apiUrl}/${id}`;
    return this._http.delete<any>(requestUrl)
  }

  getActivitiesByType(startDate:String,endDate:String,type:String): Observable<Activity[]> {
    const requestUrl = `${this.href}${this.apiUrl}/type?start-date=${startDate}&end-date=${endDate}&type=${type}`;
    return this._http.get<Activity[]>(requestUrl)
  }


}
