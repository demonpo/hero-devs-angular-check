import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
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
  private _initTodo?: Todo;
  @Input()
  set initTodo(todo: Todo) {
    this._initTodo = todo;
    this.todo?.setValue(todo.text);
  }

  @Output() todoSaved= new EventEmitter<Partial<Todo>>();
  todoForm = new FormGroup({
    todo: new FormControl(this._initTodo?.text?? '',[
      Validators.required,
      Validators.minLength(2),
    ]),
  });

  onSubmit() {
    this.todoForm.get('todo')?.markAsTouched();
    if (this.todoForm.invalid && (this.todoForm.dirty || this.todoForm.touched)) return;
    this.todoSaved.emit({id: this._initTodo?.id, text: this.todo?.value ?? undefined, completed: false});
    this.todoForm.reset();
  }

  get todo() { return this.todoForm.get('todo'); }
}
