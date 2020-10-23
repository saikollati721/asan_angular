import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = "http://localhost:8080/tasks"
  constructor(private http: HttpClient) { }

  getTasks(projectId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${projectId}`)
  }

  saveTask(task: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}`, task);
  }
}
