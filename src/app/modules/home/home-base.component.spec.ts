import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBaseComponent } from './home-base.component';

describe('HomeBaseComponent', () => {
  let component: HomeBaseComponent;
  let fixture: ComponentFixture<HomeBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
