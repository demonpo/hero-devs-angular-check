import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHolderComponent } from './modal-holder.component';

describe('ModalHolderComponent', () => {
  let component: ModalHolderComponent;
  let fixture: ComponentFixture<ModalHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalHolderComponent]
    });
    fixture = TestBed.createComponent(ModalHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
