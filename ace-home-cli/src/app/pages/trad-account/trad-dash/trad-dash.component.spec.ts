import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradDashComponent } from './trad-dash.component';

describe('TradDashComponent', () => {
  let component: TradDashComponent;
  let fixture: ComponentFixture<TradDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
