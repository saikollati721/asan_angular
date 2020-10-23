import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = new User();
  private baseUrl = "http://localhost:8080/users"
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(`${this.baseUrl}`)
  }
  saveUser(user: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}`, user);
  }
  getUserById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  loginUser(data: User){
    this.user=data;
    // this.setUserId(this.user.id)
    // this.setUserName(this.user.firstName);
  }
  getLoginUser(){
    return this.user;
  }
  // setUserId(id: number){
  //   this.user.id = id;
  // }
  // getUserId(): number{
  //   return this.user.id;
  // }
  // setUserName(name: string){
  //   this.user.firstName=name;
  // }
  // getUserName(): string{
  //   return this.user.firstName;
  // }

}
