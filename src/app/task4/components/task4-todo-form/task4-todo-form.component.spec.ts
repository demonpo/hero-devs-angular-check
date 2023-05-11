import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task4TodoFormComponent } from './task4-todo-form.component';

describe('Task4TodoFormComponent', () => {
  let component: Task4TodoFormComponent;
  let fixture: ComponentFixture<Task4TodoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Task4TodoFormComponent]
    });
    fixture = TestBed.createComponent(Task4TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
