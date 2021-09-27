import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  baseUrl = 'http://localhost:3000';

  getUsers(){
    return this.http.get(this.baseUrl + '/users');
  }

  getOneUser(username){
    return this.http.get(this.baseUrl + '/users/' + username)
  }

}
