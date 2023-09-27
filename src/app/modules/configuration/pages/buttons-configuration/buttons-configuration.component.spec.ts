import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsConfigurationComponent } from './buttons-configuration.component';

describe('ButtonsConfigurationComponent', () => {
  let component: ButtonsConfigurationComponent;
  let fixture: ComponentFixture<ButtonsConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsConfigurationComponent]
    });
    fixture = TestBed.createComponent(ButtonsConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
