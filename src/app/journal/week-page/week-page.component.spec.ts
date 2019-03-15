import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekPageComponent } from './week-page.component';

describe('WeekPageComponent', () => {
  let component: WeekPageComponent;
  let fixture: ComponentFixture<WeekPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
