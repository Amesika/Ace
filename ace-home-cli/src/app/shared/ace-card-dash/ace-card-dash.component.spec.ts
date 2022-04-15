import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceCardDashComponent } from './ace-card-dash.component';

describe('AceCardDashComponent', () => {
  let component: AceCardDashComponent;
  let fixture: ComponentFixture<AceCardDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceCardDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceCardDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
