import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeviceAddressComponent } from './admin-device-address.component';

describe('AdminDeviceAddressComponent', () => {
  let component: AdminDeviceAddressComponent;
  let fixture: ComponentFixture<AdminDeviceAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeviceAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeviceAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
