import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Todo} from "../../data.service";

@Component({
  selector: 'hd-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo = {
    id: -1,
    text: "",
    completed: false,
  };
  @Output() deleteTodo= new EventEmitter<Todo>();
  @Output() editTodo= new EventEmitter<Todo>();
  @Output() checked = new EventEmitter<Todo>();

  handleTextDoubleClicked(todo: Todo) {
    this.editTodo.emit(todo);
  }

  handleRemoveButtonClicked(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

  handleCheckBox(checked: boolean) {
    this.todo.completed = checked;
  }
}
