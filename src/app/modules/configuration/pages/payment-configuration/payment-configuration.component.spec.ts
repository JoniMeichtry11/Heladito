import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfigurationComponent } from './payment-configuration.component';

describe('PaymentConfigurationComponent', () => {
  let component: PaymentConfigurationComponent;
  let fixture: ComponentFixture<PaymentConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentConfigurationComponent]
    });
    fixture = TestBed.createComponent(PaymentConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
