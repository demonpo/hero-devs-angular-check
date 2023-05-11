import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  CategoryFilterButtonsComponent
} from "../../../components/category-filter-buttons/category-filter-buttons.component";
import {EditTodoScreenComponent} from "../../../components/edit-todo-screen/edit-todo-screen.component";
import {
  TodoListsByCategoriesComponent
} from "../../../components/todo-lists-by-categories/todo-lists-by-categories.component";
import {Observable} from "rxjs";
import {DataService, Todo} from "../../../data.service";
import {
  EditTodoWithCategoryScreenComponent
} from "../../../components/edit-todo-with-category-screen/edit-todo-with-category-screen.component";

@Component({
  selector: 'hd-task5-todo-list',
  standalone: true,
  imports: [CommonModule, CategoryFilterButtonsComponent, EditTodoScreenComponent, TodoListsByCategoriesComponent, EditTodoWithCategoryScreenComponent],
  templateUrl: './task5-todo-list.component.html',
  styleUrls: ['./task5-todo-list.component.scss']
})
export class Task5TodoListComponent {
  @ViewChild(EditTodoWithCategoryScreenComponent) editTodoWithCategoryScreenComponent!:EditTodoWithCategoryScreenComponent;
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
    this.editTodoWithCategoryScreenComponent.editTodo(todo);
  }

  selectCategoryFilter(category: string) {
    this.selectedCategoryFilter = category;
  }
}
