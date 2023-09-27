import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladitosPageComponent } from './heladitos-page.component';

describe('HeladitosPageComponent', () => {
  let component: HeladitosPageComponent;
  let fixture: ComponentFixture<HeladitosPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeladitosPageComponent]
    });
    fixture = TestBed.createComponent(HeladitosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
