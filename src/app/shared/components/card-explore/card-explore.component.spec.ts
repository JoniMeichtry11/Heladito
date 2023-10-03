import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExploreComponent } from './card-explore.component';

describe('CardExploreComponent', () => {
  let component: CardExploreComponent;
  let fixture: ComponentFixture<CardExploreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardExploreComponent]
    });
    fixture = TestBed.createComponent(CardExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
