import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataTableDsRow } from '../models/data-table';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {

  apiUrl =  environment.API_URL+"dash-bord";

  constructor(protected _http: HttpClient) {
  }


  getActivitiesMonths(): Observable<DataTableDsRow[]> {
    const requestUrl = `${this.apiUrl}`;
    return this._http.get<DataTableDsRow[]>(requestUrl)
  }

}
