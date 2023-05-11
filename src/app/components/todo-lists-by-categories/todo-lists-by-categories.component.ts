import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  TodoListWithCategoryHeaderComponent
} from "../todo-list-with-category-header/todo-list-with-category-header.component";
import {Todo} from "../../data.service";

@Component({
  selector: 'hd-todo-lists-by-categories',
  standalone: true,
  imports: [CommonModule, TodoListWithCategoryHeaderComponent],
  templateUrl: './todo-lists-by-categories.component.html',
  styleUrls: ['./todo-lists-by-categories.component.scss']
})
export class TodoListsByCategoriesComponent {
  protected readonly Object = Object;
  @Input() categoryFilter?: string | undefined;
  @Input()
  set todos(todos: Todo[]) {
    this._todosByCategories = this.mapToTodosByCategories(todos);
  }
  @Output() deleteTodo= new EventEmitter<Todo>();
  @Output() editTodo= new EventEmitter<Todo>();

  _todos: Todo[] = [];
  _todosByCategories:{[key: string]: Todo[]} = {};
  mapToTodosByCategories(todos: Todo[]): {[key: string]: Todo[]} {
    return todos.reduce((previousValue: {[key: string]: Todo[]}, currentValue: Todo) => {
      const category = !currentValue.category || currentValue.category === ''  ? 'default': currentValue.category;
      if(!previousValue[category]) previousValue[category] = [];
      previousValue[category].push(currentValue);
      return previousValue;
    }, {})
  }
}
