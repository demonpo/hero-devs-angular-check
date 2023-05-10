import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task1TodoFormComponent } from './task1-todo-form.component';

describe('Task1TodoFormComponent', () => {
  let component: Task1TodoFormComponent;
  let fixture: ComponentFixture<Task1TodoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Task1TodoFormComponent]
    });
    fixture = TestBed.createComponent(Task1TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
