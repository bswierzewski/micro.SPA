import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SettingsDeviceTabComponent } from './settings-device-tab.component';

describe('SettingsDeviceTabComponent', () => {
  let component: SettingsDeviceTabComponent;
  let fixture: ComponentFixture<SettingsDeviceTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsDeviceTabComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDeviceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
