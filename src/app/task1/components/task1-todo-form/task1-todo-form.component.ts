import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoFormComponent} from "../../../components/todo-form/todo-form.component";
import {DataService, Todo} from "../../../data.service";

@Component({
  selector: 'hd-task1-todo-form',
  standalone: true,
  imports: [CommonModule, TodoFormComponent],
  templateUrl: './task1-todo-form.component.html',
  styleUrls: ['./task1-todo-form.component.scss']
})
export class Task1TodoFormComponent {

  constructor(
    private dataService: DataService
  ) { }

  onSubmit(todo: Partial<Todo>) {
    this.dataService.add({text: todo.text, completed: todo.completed});
  }
}
