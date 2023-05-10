import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService, Todo} from "../../../data.service";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {BehaviorSubject, Observable} from "rxjs";

@Component({
  selector: 'hd-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;
  constructor(
    private dataService: DataService
  ) {
    this.todos$ = dataService.getData();
  }

  ngOnInit(): void {
  }

  handleDeleteTodo(todoId: number) {
    this.dataService.remove(todoId);
  }
}
