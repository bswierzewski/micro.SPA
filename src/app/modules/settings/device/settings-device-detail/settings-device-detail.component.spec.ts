import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SettingsDeviceDetailComponent } from './settings-device-detail.component';

describe('SettingsDeviceDetailComponent', () => {
  let component: SettingsDeviceDetailComponent;
  let fixture: ComponentFixture<SettingsDeviceDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsDeviceDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDeviceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
