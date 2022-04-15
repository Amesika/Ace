import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcePanelItemBankComponent } from './ace-panel-item-bank.component';

describe('AcePanelItemBankComponent', () => {
  let component: AcePanelItemBankComponent;
  let fixture: ComponentFixture<AcePanelItemBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcePanelItemBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcePanelItemBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
