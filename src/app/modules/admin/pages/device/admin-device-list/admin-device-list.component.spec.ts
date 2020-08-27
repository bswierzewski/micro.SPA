import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeviceListComponent } from './admin-device-list.component';

describe('AdminDeviceListComponent', () => {
  let component: AdminDeviceListComponent;
  let fixture: ComponentFixture<AdminDeviceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeviceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
