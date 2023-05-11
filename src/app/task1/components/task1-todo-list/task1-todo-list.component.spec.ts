import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Task1TodoListComponent} from './task1-todo-list.component';

describe('Task1TodoListComponent', () => {
  let component: Task1TodoListComponent;
  let fixture: ComponentFixture<Task1TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Task1TodoListComponent]
    });
    fixture = TestBed.createComponent(Task1TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
