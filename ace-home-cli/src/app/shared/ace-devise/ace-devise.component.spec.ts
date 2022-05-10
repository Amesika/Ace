import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceDeviseComponent } from './ace-devise.component';

describe('AceDeviseComponent', () => {
  let component: AceDeviseComponent;
  let fixture: ComponentFixture<AceDeviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceDeviseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceDeviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
