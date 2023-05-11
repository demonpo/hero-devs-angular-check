import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Task5TodoListComponent} from './task5-todo-list.component';

describe('Task5TodoListComponent', () => {
  let component: Task5TodoListComponent;
  let fixture: ComponentFixture<Task5TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Task5TodoListComponent]
    });
    fixture = TestBed.createComponent(Task5TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
