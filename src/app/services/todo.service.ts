import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  baseApiUrl : string = "http://localhost:5253";

  constructor(private http:HttpClient) { }

  getAllTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.baseApiUrl + "/api/todo")
  }
}
