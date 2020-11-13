import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeviceComponentDetailComponent } from './device-component-detail.component';

describe('DeviceComponentDetailComponent', () => {
  let component: DeviceComponentDetailComponent;
  let fixture: ComponentFixture<DeviceComponentDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceComponentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceComponentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
