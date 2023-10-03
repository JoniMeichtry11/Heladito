import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProyectsComponent } from './list-proyects.component';

describe('ListProyectsComponent', () => {
  let component: ListProyectsComponent;
  let fixture: ComponentFixture<ListProyectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProyectsComponent]
    });
    fixture = TestBed.createComponent(ListProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
