import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Task4Component} from './task4.component';

describe('Task4Component', () => {
  let component: Task4Component;
  let fixture: ComponentFixture<Task4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Task4Component]
    });
    fixture = TestBed.createComponent(Task4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
