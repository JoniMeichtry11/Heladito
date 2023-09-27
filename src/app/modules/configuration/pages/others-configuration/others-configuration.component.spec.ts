import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersConfigurationComponent } from './others-configuration.component';

describe('OthersConfigurationComponent', () => {
  let component: OthersConfigurationComponent;
  let fixture: ComponentFixture<OthersConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OthersConfigurationComponent]
    });
    fixture = TestBed.createComponent(OthersConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
