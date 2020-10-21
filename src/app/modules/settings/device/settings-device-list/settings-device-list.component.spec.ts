import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsDeviceListComponent } from './settings-device-list.component';

describe('SettingsDeviceListComponent', () => {
  let component: SettingsDeviceListComponent;
  let fixture: ComponentFixture<SettingsDeviceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsDeviceListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsDeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
