import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Task3TodoFormComponent} from './task3-todo-form.component';

describe('Task3TodoFormComponent', () => {
  let component: Task3TodoFormComponent;
  let fixture: ComponentFixture<Task3TodoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Task3TodoFormComponent]
    });
    fixture = TestBed.createComponent(Task3TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
