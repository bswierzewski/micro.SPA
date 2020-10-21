import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDeviceDetailComponent } from './settings-device-detail.component';

describe('SettingsDeviceDetailComponent', () => {
  let component: SettingsDeviceDetailComponent;
  let fixture: ComponentFixture<SettingsDeviceDetailComponent>;

  beforeEach(async(() => {
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
