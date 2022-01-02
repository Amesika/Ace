import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataTableDsRow } from '../models/data-table';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  href = "http://localhost:8080";
  apiUrl = '/api/dash-bord'

  constructor(protected _http: HttpClient) {
  }


  getActivitiesMonths(): Observable<DataTableDsRow[]> {
    const requestUrl = `${this.href}${this.apiUrl}`;
    return this._http.get<DataTableDsRow[]>(requestUrl)
  }

}
