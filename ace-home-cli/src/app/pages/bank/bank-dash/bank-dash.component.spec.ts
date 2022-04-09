import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDashComponent } from './bank-dash.component';

describe('BankDashComponent', () => {
  let component: BankDashComponent;
  let fixture: ComponentFixture<BankDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
