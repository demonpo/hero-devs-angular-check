import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesDropdownComponent} from "../categories-dropdown/categories-dropdown.component";
import {TodoFormComponent} from "../todo-form/todo-form.component";
import {Todo} from "../../data.service";

@Component({
  selector: 'hd-todo-with-category-form',
  standalone: true,
    imports: [CommonModule, CategoriesDropdownComponent, TodoFormComponent],
  templateUrl: './todo-with-category-form.component.html',
  styleUrls: ['./todo-with-category-form.component.scss']
})
export class TodoWithCategoryFormComponent {
  @ViewChild(TodoFormComponent) todoFormComponent!:TodoFormComponent;
  @Input() selectedCategory: string | undefined;
  @Output() todoSaved = new EventEmitter<Partial<Todo>>();

  onSubmit(todo: Partial<Todo>) {
    this.todoSaved.emit({id: todo.id, text: todo.text, completed: todo.completed, category: this.selectedCategory});
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}
