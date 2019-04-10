import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { TodosService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {
  todos: Array<Todo>;
  showTodo: boolean = true;

  todoForm = this.formBuilder.group({
    body: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodosService
  ) { }

  get body(): AbstractControl {
    return this.todoForm.get("body");
  }
  addTodo(): void {
    if (this.body.value != "") {
      this.showTodo = !this.showTodo
      this.todoService.addTodo({ body: this.body.value })
    }
  }
  removeTodo(index: number): void {
    this.todoService.removeTodo(index)
  }

  completeTodo(todo: Todo) {
    this.todoService.completeTodo(todo)
    document.querySelector("ion-item-sliding").closeOpened()

  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }

  ngOnInit() {
    this.getTodos()
  }

}
