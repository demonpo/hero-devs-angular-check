import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditTodoScreenComponent} from "../../../components/edit-todo-screen/edit-todo-screen.component";
import {TodoListComponent} from "../../../components/todo-list/todo-list.component";
import {Observable} from "rxjs";
import {DataService, Todo} from "../../../data.service";
import {
  TodoListWithCategoryHeaderComponent
} from "../../../components/todo-list-with-category-header/todo-list-with-category-header.component";
import {
  TodoListsByCategoriesComponent
} from "../../../components/todo-lists-by-categories/todo-lists-by-categories.component";

@Component({
  selector: 'hd-task3-todo-list',
  standalone: true,
  imports: [CommonModule, EditTodoScreenComponent, TodoListComponent, TodoListWithCategoryHeaderComponent, TodoListsByCategoriesComponent],
  templateUrl: './task3-todo-list.component.html',
  styleUrls: ['./task3-todo-list.component.scss']
})
export class Task3TodoListComponent {
  protected readonly Object = Object;
  @ViewChild(EditTodoScreenComponent) editTodoScreenComponent!:EditTodoScreenComponent;

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
    this.dataService.remove(todo.id);
  }

  handleEditTodo(todo: Todo) {
    this.editTodoScreenComponent.editTodo(todo);
  }
}
