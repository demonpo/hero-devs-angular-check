import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CategoryFilterButtonsComponent} from './category-filter-buttons.component';

describe('CategoryFilterButtonsComponent', () => {
  let component: CategoryFilterButtonsComponent;
  let fixture: ComponentFixture<CategoryFilterButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CategoryFilterButtonsComponent]
    });
    fixture = TestBed.createComponent(CategoryFilterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
