import { Todo } from "./todos.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      "http://jsonplaceholder.typicode.com/todos?_limit=5"
    );
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(
      "http://jsonplaceholder.typicode.com/todos",
      todo
    );
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(
      "http://jsonplaceholder.typicode.com/todos/${todo.id}"
    );
  }

  //Toggle Compeleted
  toggleCompleted(todo: Todo): Observable<any> {
    return this.http.put(
      "http://jsonplaceholder.typicode.com/todos/${todo.id}",
      todo
    );
  }
}
