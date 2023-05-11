import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListWithCategoryHeaderComponent} from './todo-list-with-category-header.component';

describe('TodoListWithCategoryHeaderComponent', () => {
  let component: TodoListWithCategoryHeaderComponent;
  let fixture: ComponentFixture<TodoListWithCategoryHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TodoListWithCategoryHeaderComponent]
    });
    fixture = TestBed.createComponent(TodoListWithCategoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
