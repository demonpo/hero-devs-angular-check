import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4TodoListComponent } from './task4-todo-list.component';

describe('Task4TodoListComponent', () => {
  let component: Task4TodoListComponent;
  let fixture: ComponentFixture<Task4TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Task4TodoListComponent]
    });
    fixture = TestBed.createComponent(Task4TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
