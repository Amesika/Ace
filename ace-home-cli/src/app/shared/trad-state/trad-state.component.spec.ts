import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradStateComponent } from './trad-state.component';

describe('TradStateComponent', () => {
  let component: TradStateComponent;
  let fixture: ComponentFixture<TradStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
