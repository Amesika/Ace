import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcePanelItemTradComponent } from './ace-panel-item-trad.component';

describe('AcePanelItemTradComponent', () => {
  let component: AcePanelItemTradComponent;
  let fixture: ComponentFixture<AcePanelItemTradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcePanelItemTradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcePanelItemTradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
