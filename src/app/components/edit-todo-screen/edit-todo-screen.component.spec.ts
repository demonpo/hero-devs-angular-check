import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EditTodoScreenComponent} from './edit-todo-screen.component';

describe('EditTodoScreenComponent', () => {
  let component: EditTodoScreenComponent;
  let fixture: ComponentFixture<EditTodoScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditTodoScreenComponent]
    });
    fixture = TestBed.createComponent(EditTodoScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
