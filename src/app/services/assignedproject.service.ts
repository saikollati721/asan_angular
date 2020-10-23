import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignedprojectService {
  private baseUrl = "http://localhost:8080/user_projects"
  constructor(private http: HttpClient) { }

  getassignedprojects(userId: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  saveAssignedProject(project: Object) : Observable<any>{
    return this.http.post(`${this.baseUrl}`, project);
  }
}
