import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPaymentComponentComponent } from './confirm-payment-component.component';

describe('ConfirmPaymentComponentComponent', () => {
  let component: ConfirmPaymentComponentComponent;
  let fixture: ComponentFixture<ConfirmPaymentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmPaymentComponentComponent]
    });
    fixture = TestBed.createComponent(ConfirmPaymentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
