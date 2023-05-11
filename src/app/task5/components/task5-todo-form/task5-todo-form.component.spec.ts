import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5TodoFormComponent } from './task5-todo-form.component';

describe('Task5TodoFormComponent', () => {
  let component: Task5TodoFormComponent;
  let fixture: ComponentFixture<Task5TodoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Task5TodoFormComponent]
    });
    fixture = TestBed.createComponent(Task5TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
