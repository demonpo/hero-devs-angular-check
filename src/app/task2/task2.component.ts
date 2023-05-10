import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoFormComponent} from "../components/todo-form/todo-form.component";
import {TodoListComponent} from "../components/todo-list/todo-list.component";

@Component({
  selector: 'hd-task2',
  standalone: true,
    imports: [CommonModule, TodoFormComponent, TodoListComponent],
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component {

}
