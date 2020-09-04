import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeviceInformationKindComponent } from './admin-device-information-kind.component';

describe('AdminDeviceInformationKindComponent', () => {
  let component: AdminDeviceInformationKindComponent;
  let fixture: ComponentFixture<AdminDeviceInformationKindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDeviceInformationKindComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeviceInformationKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
