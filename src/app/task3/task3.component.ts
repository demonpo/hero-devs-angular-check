import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task3TodoFormComponent} from "./components/task3-todo-form/task3-todo-form.component";
import {Task3TodoListComponent} from "./components/task3-todo-list/task3-todo-list.component";

@Component({
  selector: 'hd-task3',
  standalone: true,
  imports: [CommonModule, Task3TodoFormComponent, Task3TodoListComponent],
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component {

}
