import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSideNavbarComponent } from './home-side-navbar.component';

describe('HomeSideNavbarComponent', () => {
  let component: HomeSideNavbarComponent;
  let fixture: ComponentFixture<HomeSideNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSideNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSideNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
