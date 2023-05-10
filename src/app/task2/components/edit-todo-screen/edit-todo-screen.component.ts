import {Component, EventEmitter, Output, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoFormComponent} from "../../../components/todo-form/todo-form.component";
import {DataService, Todo} from "../../../data.service";
import {ModalHolderComponent} from "../../../components/modal-holder/modal-holder.component";

@Component({
  selector: 'hd-edit-todo-screen',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, ModalHolderComponent],
  templateUrl: './edit-todo-screen.component.html',
  styleUrls: ['./edit-todo-screen.component.scss']
})
export class EditTodoScreenComponent {
  @ViewChild(ModalHolderComponent) modalHolderComponent!:ModalHolderComponent;
  @ViewChild(TodoFormComponent) todoFormComponent!:TodoFormComponent;
  @Output() todoSaved =  new EventEmitter<Todo>();

  handleTodoSaved(todo: Partial<Todo>) {
    if(!todo.id || !todo.text || todo.completed === undefined) throw new Error("Empty todo saved");
    this.todoSaved.emit({
      id: todo.id,
      text: todo.text,
      completed: todo.completed
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
