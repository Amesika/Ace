import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradDetailsComponent } from './trad-details.component';

describe('TradDetailsComponent', () => {
  let component: TradDetailsComponent;
  let fixture: ComponentFixture<TradDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
