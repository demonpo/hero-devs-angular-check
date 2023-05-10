import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Todo} from "../../data.service";

@Component({
  selector: 'hd-todo-form',
  standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  @Output() todoSaved= new EventEmitter<Partial<Todo>>();
  todoForm = new FormGroup({
    todo: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  onSubmit() {
    this.todoForm.get('todo')?.markAsTouched();
    if (this.todoForm.invalid && (this.todoForm.dirty || this.todoForm.touched)) return;
    this.todoSaved.emit({text: this.todo?.value ?? undefined, completed: false});
  }

  get todo() { return this.todoForm.get('todo'); }
}
