import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAccountInfoComponent } from './menu-account-info.component';

describe('MenuAccountInfoComponent', () => {
  let component: MenuAccountInfoComponent;
  let fixture: ComponentFixture<MenuAccountInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAccountInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
