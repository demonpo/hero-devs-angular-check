import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoFormComponent} from "../../../components/todo-form/todo-form.component";
import {DataService, Todo} from "../../../data.service";
import {DropdownComponent} from "../../../components/dropdown/dropdown.component";
import {CategoriesDropdownComponent} from "../../../components/categories-dropdown/categories-dropdown.component";

@Component({
  selector: 'hd-task3-todo-form',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, DropdownComponent, CategoriesDropdownComponent],
  templateUrl: './task3-todo-form.component.html',
  styleUrls: ['./task3-todo-form.component.scss']
})
export class Task3TodoFormComponent {

  selectedCategory?: string;
  constructor(
    private dataService: DataService
  ) { }

  onSubmit(todo: Partial<Todo>) {
    console.log("category: this.selectedCategory", this.selectedCategory);
    this.dataService.add({text: todo.text, completed: todo.completed, category: this.selectedCategory});
  }

  selectCategory(category: string) {
    console.log("Select category",category);
    this.selectedCategory = category;
  }
}
