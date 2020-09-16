import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeviceInformationCategoryComponent } from './admin-device-information-category.component';

describe('AdminDeviceInformationCategoryComponent', () => {
  let component: AdminDeviceInformationCategoryComponent;
  let fixture: ComponentFixture<AdminDeviceInformationCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDeviceInformationCategoryComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeviceInformationCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
