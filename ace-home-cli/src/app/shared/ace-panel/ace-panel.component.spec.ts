import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcePanelComponent } from './ace-panel.component';

describe('AcePanelComponent', () => {
  let component: AcePanelComponent;
  let fixture: ComponentFixture<AcePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
