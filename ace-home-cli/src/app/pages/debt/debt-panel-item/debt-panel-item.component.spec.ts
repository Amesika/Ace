import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtPanelItemComponent } from './debt-panel-item.component';

describe('DebtPanelItemComponent', () => {
  let component: DebtPanelItemComponent;
  let fixture: ComponentFixture<DebtPanelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebtPanelItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
