import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalHolderComponent} from "../modal-holder/modal-holder.component";
import {TodoFormComponent} from "../todo-form/todo-form.component";
import {Todo} from "../../data.service";
import {TodoWithCategoryFormComponent} from "../todo-with-category-form/todo-with-category-form.component";

@Component({
  selector: 'hd-edit-todo-with-category-screen',
  standalone: true,
  imports: [CommonModule, ModalHolderComponent, TodoFormComponent, TodoWithCategoryFormComponent],
  templateUrl: './edit-todo-with-category-screen.component.html',
  styleUrls: ['./edit-todo-with-category-screen.component.scss']
})
export class EditTodoWithCategoryScreenComponent {
  @ViewChild(ModalHolderComponent) modalHolderComponent!:ModalHolderComponent;
  @ViewChild(TodoFormComponent) todoFormComponent!:TodoFormComponent;
  @Output() todoSaved =  new EventEmitter<Todo>();
  @Input() category?: string;

  handleTodoSaved(todo: Partial<Todo>) {
    if(!todo.id || !todo.text || todo.completed === undefined) throw new Error("Empty todo saved");
    this.todoSaved.emit({
      id: todo.id,
      text: todo.text,
      completed: todo.completed,
      category: todo.category
    });
    this.closeDialog();
  }

  closeDialog() {
    this.modalHolderComponent.closeDialog();
  }

  showDialog() {
    this.modalHolderComponent.showDialog();
  }

  editTodo(todo: Todo) {
    this.todoFormComponent.initTodo = {...todo};
    this.showDialog();
  }
}
