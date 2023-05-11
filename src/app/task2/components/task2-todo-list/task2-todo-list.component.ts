import {Component, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from "../../../components/todo-list/todo-list.component";
import {Observable} from "rxjs";
import {DataService, Todo} from "../../../data.service";
import {EditTodoScreenComponent} from "../../../components/edit-todo-screen/edit-todo-screen.component";

@Component({
  selector: 'hd-task2-todo-list',
  standalone: true,
  imports: [CommonModule, TodoListComponent, EditTodoScreenComponent],
  templateUrl: './task2-todo-list.component.html',
  styleUrls: ['./task2-todo-list.component.scss']
})
export class Task2TodoListComponent {
  @ViewChild(EditTodoScreenComponent) editTodoScreenComponent!:EditTodoScreenComponent;

  todos$: Observable<Todo[]>;
  constructor(
    private dataService: DataService
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
