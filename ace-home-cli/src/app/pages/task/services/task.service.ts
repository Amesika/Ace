import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import  {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(`${environment.API_URL}tasks`)
  }

  postTask(body:Task): Observable<Task> {
    return this.http.post<Task>(`${environment.API_URL}tasks`,body)
  }

}
