import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoWithCategoryFormComponent} from './todo-with-category-form.component';

describe('TodoWithCategoryFormComponent', () => {
  let component: TodoWithCategoryFormComponent;
  let fixture: ComponentFixture<TodoWithCategoryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TodoWithCategoryFormComponent]
    });
    fixture = TestBed.createComponent(TodoWithCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
