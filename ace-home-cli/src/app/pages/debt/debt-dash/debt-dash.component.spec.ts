import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtDashComponent } from './debt-dash.component';

describe('DebtDashComponent', () => {
  let component: DebtDashComponent;
  let fixture: ComponentFixture<DebtDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
