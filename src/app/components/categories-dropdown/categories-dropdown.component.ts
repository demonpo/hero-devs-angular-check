import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownComponent} from "../dropdown/dropdown.component";
import {CategoryService} from "../../category.service";
import {Observable} from "rxjs";
import {TodoListComponent} from "../todo-list/todo-list.component";

@Component({
  selector: 'hd-categories-dropdown',
  standalone: true,
  imports: [CommonModule, DropdownComponent, TodoListComponent],
  templateUrl: './categories-dropdown.component.html',
  styleUrls: ['./categories-dropdown.component.scss']
})
export class CategoriesDropdownComponent {
  categories$: Observable<string[]>;
  @Output() selectedCategory: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private categoryService: CategoryService
  ) {
    this.categories$ = this.categoryService.getData();
  }

  addCategory(category: string) {
    console.log("addCategory");
    this.categoryService.add(category);
  }
}
