import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Todo} from "../../data.service";
import {TodoItemComponent} from "../todo-item/todo-item.component";

@Component({
  selector: 'hd-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() deleteTodo= new EventEmitter<Todo>();
  @Output() editTodo= new EventEmitter<Todo>();
  @Output() checked = new EventEmitter<Todo>();
}
