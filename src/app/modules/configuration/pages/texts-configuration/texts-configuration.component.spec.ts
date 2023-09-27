import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsConfigurationComponent } from './texts-configuration.component';

describe('TextsConfigurationComponent', () => {
  let component: TextsConfigurationComponent;
  let fixture: ComponentFixture<TextsConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextsConfigurationComponent]
    });
    fixture = TestBed.createComponent(TextsConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
