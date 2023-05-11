import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    TodoWithCategoryFormComponent
} from "../../../components/todo-with-category-form/todo-with-category-form.component";
import {DataService, Todo} from "../../../data.service";

@Component({
  selector: 'hd-task4-todo-form',
  standalone: true,
    imports: [CommonModule, TodoWithCategoryFormComponent],
  templateUrl: './task4-todo-form.component.html',
  styleUrls: ['./task4-todo-form.component.scss']
})
export class Task4TodoFormComponent {
  constructor(
    private dataService: DataService
  ) { }

  onSubmit(todo: Partial<Todo>) {
    this.dataService.add({text: todo.text, completed: todo.completed, category: todo.category});
  }
}
