import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeviceInformationButtonComponent } from './admin-device-information-button.component';

describe('AdminDeviceInformationButtonComponent', () => {
  let component: AdminDeviceInformationButtonComponent;
  let fixture: ComponentFixture<AdminDeviceInformationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeviceInformationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeviceInformationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
