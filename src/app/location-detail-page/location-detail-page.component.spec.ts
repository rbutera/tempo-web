import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetailPageComponent } from './location-detail-page.component';

describe('LocationDetailPageComponent', () => {
  let component: LocationDetailPageComponent;
  let fixture: ComponentFixture<LocationDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
