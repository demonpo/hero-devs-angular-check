import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FilterButtonsComponent} from './filter-buttons.component';

describe('FilterButtonsComponent', () => {
  let component: FilterButtonsComponent;
  let fixture: ComponentFixture<FilterButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FilterButtonsComponent]
    });
    fixture = TestBed.createComponent(FilterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
