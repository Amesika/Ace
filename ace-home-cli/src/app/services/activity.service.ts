import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  apiUrl =  environment.API_URL+"activity";

  constructor(protected _http: HttpClient) {
  }

  getBalance(): Observable<number> {
    const requestUrl = `${this.apiUrl}/balance`;
    return this._http.get<number>(requestUrl)
  }

  postActivity(body: Activity): Observable<Activity> {
    console.log("postActivity")
    const requestUrl = `${this.apiUrl}`;
    return this._http.post<Activity>(requestUrl,body)
  }

  putActivity(body: Activity): Observable<Activity> {
    const requestUrl = `${this.apiUrl}`;
    return this._http.put<Activity>(requestUrl,body)
  }

  deleteActivity(id:number): Observable<Activity> {
    const requestUrl = `${this.apiUrl}/${id}`;
    return this._http.delete<any>(requestUrl)
  }

  getActivitiesByType(startDate:String,endDate:String,type:String): Observable<Activity[]> {
    const requestUrl = `${this.apiUrl}/type?start-date=${startDate}&end-date=${endDate}&type=${type}`;
    return this._http.get<Activity[]>(requestUrl)
  }


}
