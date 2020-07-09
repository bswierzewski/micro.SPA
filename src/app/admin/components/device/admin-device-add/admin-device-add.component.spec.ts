import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeviceAddComponent } from './admin-device-add.component';

describe('AdminDeviceAddComponent', () => {
  let component: AdminDeviceAddComponent;
  let fixture: ComponentFixture<AdminDeviceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeviceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeviceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
