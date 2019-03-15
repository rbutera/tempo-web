import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsPageComponent } from './highlights-page.component';

describe('HighlightsPageComponent', () => {
  let component: HighlightsPageComponent;
  let fixture: ComponentFixture<HighlightsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
