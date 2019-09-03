import { Todo } from "./../../shared/todos.model";
import { TodoService } from "./../../shared/todo.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo = new EventEmitter();
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  setClass() {
    let classes = {
      todo: true,
      "is-completed": this.todo.completed
    };
    return classes;
  }

  onToggle(todo) {
    //Toggle on Client
    todo.completed = !todo.completed;

    //Toggle on Server

    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
