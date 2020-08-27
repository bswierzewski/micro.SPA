import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeviceCreateComponent } from './admin-device-create.component';

describe('AdminDeviceCreateComponent', () => {
  let component: AdminDeviceCreateComponent;
  let fixture: ComponentFixture<AdminDeviceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeviceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeviceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
