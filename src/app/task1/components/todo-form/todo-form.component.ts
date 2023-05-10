import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DataService} from "../../../data.service";

@Component({
  selector: 'hd-todo-form',
  standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  todoForm = new FormGroup({
    todo: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(
    private dataService: DataService
  ) { }

  onSubmit() {
    this.todoForm.get('todo')?.markAsTouched();
    if (this.todoForm.invalid && (this.todoForm.dirty || this.todoForm.touched)) return;
    this.dataService.add({text: this.todoForm.get("todo")?.value ?? '', completed: false});
  }

  get todo() { return this.todoForm.get('todo'); }
}
