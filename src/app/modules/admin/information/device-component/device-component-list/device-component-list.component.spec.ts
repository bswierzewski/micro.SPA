import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceComponentListComponent } from './device-component-list.component';

describe('DeviceComponentListComponent', () => {
  let component: DeviceComponentListComponent;
  let fixture: ComponentFixture<DeviceComponentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceComponentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceComponentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
