import { Injectable } from '@angular/core';
import { Todo } from '../Models/Todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Array<Todo> = [];
  constructor() { }

  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  completeTodo(todo): void {
    todo.completed = !todo.completed;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  getTodos(): Observable<Array<Todo>> {
    return of(this.todos);
  }

}
