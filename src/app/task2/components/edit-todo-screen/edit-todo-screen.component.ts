import {Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoFormComponent} from "../../../components/todo-form/todo-form.component";
import {Todo} from "../../../data.service";
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
  handleTodoSaved(todo: Partial<Todo>) {
  }

  closeDialog() {
    this.modalHolderComponent.closeDialog();
  }

  showDialog() {
    this.modalHolderComponent.showDialog();
  }
}
