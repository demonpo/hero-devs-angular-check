import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoFormComponent} from "../components/todo-form/todo-form.component";
import {TodoListComponent} from "../components/todo-list/todo-list.component";
import {Task2TodoFormComponent} from "./components/task2-todo-form/task2-todo-form.component";
import {Task2TodoListComponent} from "./components/task2-todo-list/task2-todo-list.component";
import {EditTodoScreenComponent} from "./components/edit-todo-screen/edit-todo-screen.component";

@Component({
  selector: 'hd-task2',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodoListComponent, Task2TodoFormComponent, Task2TodoListComponent, EditTodoScreenComponent],
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component {

}
