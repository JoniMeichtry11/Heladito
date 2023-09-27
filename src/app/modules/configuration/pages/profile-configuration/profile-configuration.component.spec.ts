import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileConfigurationComponent } from './profile-configuration.component';

describe('ProfileConfigurationComponent', () => {
  let component: ProfileConfigurationComponent;
  let fixture: ComponentFixture<ProfileConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileConfigurationComponent]
    });
    fixture = TestBed.createComponent(ProfileConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
