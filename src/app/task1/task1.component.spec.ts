import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Task1Component} from './task1.component';

describe('Task1Component', () => {
  let component: Task1Component;
  let fixture: ComponentFixture<Task1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Task1Component]
    });
    fixture = TestBed.createComponent(Task1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
