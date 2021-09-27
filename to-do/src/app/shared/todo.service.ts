import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http: HttpClient) { }
  baseUrl = 'http://localhost:3000';

  getTodos(){
    return this.http.get(this.baseUrl + '/todos');
  }

  getOneTodo(id){
    return this.http.get(this.baseUrl + '/todos/'+ id);
  }

}
