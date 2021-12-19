import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDashComponent } from './activity-dash.component';

describe('ActivityDashComponent', () => {
  let component: ActivityDashComponent;
  let fixture: ComponentFixture<ActivityDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
