import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task3TodoListComponent } from './task3-todo-list.component';

describe('Task3TodoListComponent', () => {
  let component: Task3TodoListComponent;
  let fixture: ComponentFixture<Task3TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Task3TodoListComponent]
    });
    fixture = TestBed.createComponent(Task3TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
