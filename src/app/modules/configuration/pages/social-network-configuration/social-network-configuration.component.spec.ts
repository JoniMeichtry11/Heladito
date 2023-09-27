import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialNetworkConfigurationComponent } from './social-network-configuration.component';

describe('SocialNetworkConfigurationComponent', () => {
  let component: SocialNetworkConfigurationComponent;
  let fixture: ComponentFixture<SocialNetworkConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialNetworkConfigurationComponent]
    });
    fixture = TestBed.createComponent(SocialNetworkConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
