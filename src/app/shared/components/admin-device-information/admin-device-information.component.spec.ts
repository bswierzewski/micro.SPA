import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeviceInformationComponent } from './admin-device-information.component';

describe('AdminDeviceInformationComponent', () => {
  let component: AdminDeviceInformationComponent;
  let fixture: ComponentFixture<AdminDeviceInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeviceInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeviceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
