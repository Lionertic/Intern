import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {User} from './User'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>('http://localhost:3000/users/');
  }

  getUser(id){
    return this.http.get<User>('http://localhost:3000/users/'+id);
  }
}
