import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataService, Todo} from "../../data.service";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {Observable} from "rxjs";

@Component({
  selector: 'hd-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() deleteTodo= new EventEmitter<number>();
  @Output() editTodo= new EventEmitter<number>();

  handleDeleteTodo(todoId: number) {
    this.deleteTodo.emit(todoId)
  }

  handleEditTodo(todoId: number) {
    this.editTodo.emit(todoId);
  }
}
