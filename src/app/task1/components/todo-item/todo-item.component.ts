import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hd-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() id: number = -1;
  @Input() text = '';
  @Input() isCompleted = false;
  @Output() deleteTodo= new EventEmitter<number>();
  @Output() editTodo= new EventEmitter<number>();

  handleTextDoubleClicked(todoId: number) {
    this.editTodo.emit(todoId)
  }

  handleRemoveButtonClicked(todoId: number) {
    this.deleteTodo.emit(todoId);
  }
}
