import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
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
    todo: new FormControl(''),
  });

  constructor(
    private dataService: DataService
  ) { }

  onSubmit() {
    console.log(this.todoForm);
    this.dataService.add({id: 1, text: "sdasd", completed: true});
  }
}
