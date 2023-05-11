import {Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditTodoScreenComponent} from "../../../components/edit-todo-screen/edit-todo-screen.component";
import {
    TodoListWithCategoryHeaderComponent
} from "../../../components/todo-list-with-category-header/todo-list-with-category-header.component";
import {map, Observable} from "rxjs";
import {DataService, Todo} from "../../../data.service";
import {
  TodoListsByCategoriesComponent
} from "../../../components/todo-lists-by-categories/todo-lists-by-categories.component";
import {
  CategoryFilterButtonsComponent
} from "../../../components/category-filter-buttons/category-filter-buttons.component";

@Component({
  selector: 'hd-task4-todo-list',
  standalone: true,
  imports: [CommonModule, EditTodoScreenComponent, TodoListWithCategoryHeaderComponent, TodoListsByCategoriesComponent, CategoryFilterButtonsComponent],
  templateUrl: './task4-todo-list.component.html',
  styleUrls: ['./task4-todo-list.component.scss']
})
export class Task4TodoListComponent {
  @ViewChild(EditTodoScreenComponent) editTodoScreenComponent!:EditTodoScreenComponent;
  selectedCategoryFilter?: string;
  todos$: Observable<Todo[]>;
  constructor(
    private dataService: DataService,
  ) {
    this.todos$ = dataService.getData();
  }

  handleTodoSaved(todo: Todo) {
    this.dataService.update(todo);
  }

  handleDeleteTodo(todo: Todo) {
    if(!confirm(`Are you sure to delete ${todo.category ?? ''} ${todo.text}`)) return;
    this.dataService.remove(todo.id);
  }

  handleEditTodo(todo: Todo) {
    this.editTodoScreenComponent.editTodo(todo);
  }

  selectCategoryFilter(category: string) {
    this.selectedCategoryFilter = category;
  }
}
