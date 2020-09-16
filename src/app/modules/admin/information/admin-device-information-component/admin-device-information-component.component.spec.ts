import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeviceInformationComponentComponent } from './admin-device-information-component.component';

describe('AdminDeviceInformationComponentComponent', () => {
  let component: AdminDeviceInformationComponentComponent;
  let fixture: ComponentFixture<AdminDeviceInformationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDeviceInformationComponentComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeviceInformationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
