import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceComponentDetailComponent } from './device-component-detail.component';

describe('DeviceComponentDetailComponent', () => {
  let component: DeviceComponentDetailComponent;
  let fixture: ComponentFixture<DeviceComponentDetailComponent>;

  beforeEach(async(() => {
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
