import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoListsByCategoriesComponent} from './todo-lists-by-categories.component';

describe('TodoListsByCategoriesComponent', () => {
  let component: TodoListsByCategoriesComponent;
  let fixture: ComponentFixture<TodoListsByCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TodoListsByCategoriesComponent]
    });
    fixture = TestBed.createComponent(TodoListsByCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
