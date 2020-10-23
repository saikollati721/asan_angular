import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../Model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  private baseUrl = "http://localhost:8080/projects"
  constructor(private http: HttpClient) { }
  getProjectByUserId(userId:number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  saveProject(project: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}`, project);
  }

  deleteProject(projectId:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${projectId}`);
  }
}
