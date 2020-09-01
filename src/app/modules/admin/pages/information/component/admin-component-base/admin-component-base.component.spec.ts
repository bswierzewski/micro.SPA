import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponentBaseComponent } from './admin-component-base.component';

describe('AdminComponentBaseComponent', () => {
  let component: AdminComponentBaseComponent;
  let fixture: ComponentFixture<AdminComponentBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponentBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponentBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
