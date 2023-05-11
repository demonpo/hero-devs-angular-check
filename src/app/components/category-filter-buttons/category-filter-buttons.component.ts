import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilterButtonsComponent} from "../filter-buttons/filter-buttons.component";
import {Observable} from "rxjs";
import {CategoryService} from "../../category.service";

@Component({
  selector: 'hd-category-filter-buttons',
  standalone: true,
  imports: [CommonModule, FilterButtonsComponent],
  templateUrl: './category-filter-buttons.component.html',
  styleUrls: ['./category-filter-buttons.component.scss']
})
export class CategoryFilterButtonsComponent {
  categories$: Observable<string[]>;
  @Output() selectedCategory: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private categoryService: CategoryService
  ) {
    this.categories$ = this.categoryService.getData();
  }
}
