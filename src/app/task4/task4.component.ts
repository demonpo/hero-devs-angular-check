import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task4TodoFormComponent} from "./components/task4-todo-form/task4-todo-form.component";
import {Task4TodoListComponent} from "./components/task4-todo-list/task4-todo-list.component";
import {CategoryFilterButtonsComponent} from "../components/category-filter-buttons/category-filter-buttons.component";

@Component({
  selector: 'hd-task4',
  standalone: true,
  imports: [CommonModule, Task4TodoFormComponent, Task4TodoListComponent, CategoryFilterButtonsComponent],
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss']
})
export class Task4Component {

}
