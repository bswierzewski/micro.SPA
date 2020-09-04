import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeviceInformationListComponent } from './admin-device-information-list.component';

describe('AdminDeviceInformationListComponent', () => {
  let component: AdminDeviceInformationListComponent;
  let fixture: ComponentFixture<AdminDeviceInformationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeviceInformationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeviceInformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
