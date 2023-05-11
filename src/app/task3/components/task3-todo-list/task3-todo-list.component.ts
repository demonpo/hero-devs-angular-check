import {Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditTodoScreenComponent} from "../../../components/edit-todo-screen/edit-todo-screen.component";
import {TodoListComponent} from "../../../components/todo-list/todo-list.component";
import {Observable} from "rxjs";
import {DataService, Todo} from "../../../data.service";
import {CategoryService} from "../../../category.service";

@Component({
  selector: 'hd-task3-todo-list',
  standalone: true,
    imports: [CommonModule, EditTodoScreenComponent, TodoListComponent],
  templateUrl: './task3-todo-list.component.html',
  styleUrls: ['./task3-todo-list.component.scss']
})
export class Task3TodoListComponent {
  @ViewChild(EditTodoScreenComponent) editTodoScreenComponent!:EditTodoScreenComponent;

  todos$: Observable<Todo[]>;
  constructor(
    private dataService: DataService,
    private categoryService: CategoryService,
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
