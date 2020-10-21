import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDeviceAddressComponent } from './settings-device-address.component';

describe('SettingsDeviceAddressComponent', () => {
  let component: SettingsDeviceAddressComponent;
  let fixture: ComponentFixture<SettingsDeviceAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsDeviceAddressComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDeviceAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
