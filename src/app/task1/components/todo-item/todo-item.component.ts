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
  @Output() deleteTodo= new EventEmitter();

  handleRemoveButtonClicked(todoId: number) {
    console.log('handleRemoveButtonClicked', todoId);
    this.deleteTodo.emit(todoId);
  }
}
