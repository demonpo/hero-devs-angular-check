import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListComponent} from "../todo-list/todo-list.component";
import {Todo} from "../../data.service";

@Component({
  selector: 'hd-todo-list-with-category-header',
  standalone: true,
  imports: [CommonModule, TodoListComponent],
  templateUrl: './todo-list-with-category-header.component.html',
  styleUrls: ['./todo-list-with-category-header.component.scss']
})
export class TodoListWithCategoryHeaderComponent {
  @Input() category?: string;
  @Input() todos: Todo[] = [];
  @Output() deleteTodo= new EventEmitter<Todo>();
  @Output() editTodo= new EventEmitter<Todo>();
}
