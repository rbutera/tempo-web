import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosPageComponent } from './combos-page.component';

describe('CombosPageComponent', () => {
  let component: CombosPageComponent;
  let fixture: ComponentFixture<CombosPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombosPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
