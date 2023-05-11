import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Task2TodoListComponent} from './task2-todo-list.component';

describe('Task2TodoListComponent', () => {
  let component: Task2TodoListComponent;
  let fixture: ComponentFixture<Task2TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Task2TodoListComponent]
    });
    fixture = TestBed.createComponent(Task2TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
