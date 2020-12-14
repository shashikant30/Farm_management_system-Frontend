import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboursComponent } from './labours.component';

describe('LaboursComponent', () => {
  let component: LaboursComponent;
  let fixture: ComponentFixture<LaboursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
