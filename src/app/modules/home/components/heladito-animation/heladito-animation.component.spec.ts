import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladitoAnimationComponent } from './heladito-animation.component';

describe('HeladitoAnimationComponent', () => {
  let component: HeladitoAnimationComponent;
  let fixture: ComponentFixture<HeladitoAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeladitoAnimationComponent]
    });
    fixture = TestBed.createComponent(HeladitoAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
