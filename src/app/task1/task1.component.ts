import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoFormComponent} from "../components/todo-form/todo-form.component";
import {TodoListComponent} from "../components/todo-list/todo-list.component";
import {Task1TodoFormComponent} from "./components/task1-todo-form/task1-todo-form.component";
import {Task1TodoListComponent} from "./components/task1-todo-list/task1-todo-list.component";

@Component({
  selector: 'hd-task1',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodoListComponent, Task1TodoFormComponent, Task1TodoListComponent],
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})
export class Task1Component {

}
