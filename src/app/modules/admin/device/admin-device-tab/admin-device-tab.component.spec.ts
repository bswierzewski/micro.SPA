import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeviceTabComponent } from './admin-device-tab.component';

describe('AdminDeviceTabComponent', () => {
  let component: AdminDeviceTabComponent;
  let fixture: ComponentFixture<AdminDeviceTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeviceTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeviceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
