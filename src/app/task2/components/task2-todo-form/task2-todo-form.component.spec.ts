import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task2TodoFormComponent } from './task2-todo-form.component';

describe('Task2TodoFormComponent', () => {
  let component: Task2TodoFormComponent;
  let fixture: ComponentFixture<Task2TodoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Task2TodoFormComponent]
    });
    fixture = TestBed.createComponent(Task2TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
