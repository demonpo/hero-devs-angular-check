import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {DataService, Todo} from "../../../data.service";
import {TodoListComponent} from "../../../components/todo-list/todo-list.component";

@Component({
  selector: 'hd-task1-todo-list',
  standalone: true,
  imports: [CommonModule, TodoListComponent],
  templateUrl: './task1-todo-list.component.html',
  styleUrls: ['./task1-todo-list.component.scss']
})
export class Task1TodoListComponent {
  todos$: Observable<Todo[]>;
  constructor(
    private dataService: DataService
  ) {
    this.todos$ = dataService.getData();
  }

  handleDeleteTodo(todoId: number) {
    this.dataService.remove(todoId);
  }
}
