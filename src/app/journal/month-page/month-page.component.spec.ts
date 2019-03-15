import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPageComponent } from './month-page.component';

describe('MonthPageComponent', () => {
  let component: MonthPageComponent;
  let fixture: ComponentFixture<MonthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
