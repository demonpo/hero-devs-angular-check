import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Task5TodoFormComponent} from "./components/task5-todo-form/task5-todo-form.component";
import {Task5TodoListComponent} from "./components/task5-todo-list/task5-todo-list.component";

@Component({
  selector: 'hd-task5',
  standalone: true,
  imports: [CommonModule, Task5TodoFormComponent, Task5TodoListComponent],
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss']
})
export class Task5Component {

}
