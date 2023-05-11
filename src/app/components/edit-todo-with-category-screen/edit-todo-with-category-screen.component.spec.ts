import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditTodoWithCategoryScreenComponent} from './edit-todo-with-category-screen.component';

describe('EditTodoWithCategoryScreenComponent', () => {
  let component: EditTodoWithCategoryScreenComponent;
  let fixture: ComponentFixture<EditTodoWithCategoryScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditTodoWithCategoryScreenComponent]
    });
    fixture = TestBed.createComponent(EditTodoWithCategoryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
