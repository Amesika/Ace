import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceNumberComponent } from './ace-number.component';

describe('AceNumberComponent', () => {
  let component: AceNumberComponent;
  let fixture: ComponentFixture<AceNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
