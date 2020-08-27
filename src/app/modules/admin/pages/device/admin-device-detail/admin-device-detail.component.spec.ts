import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeviceDetailComponent } from './admin-device-detail.component';

describe('AdminDeviceDetailComponent', () => {
  let component: AdminDeviceDetailComponent;
  let fixture: ComponentFixture<AdminDeviceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeviceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeviceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
