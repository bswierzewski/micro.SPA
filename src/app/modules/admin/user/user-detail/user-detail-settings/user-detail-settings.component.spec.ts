import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserDetailSettingsComponent } from './user-detail-settings.component';

describe('UserDetailSettingsComponent', () => {
  let component: UserDetailSettingsComponent;
  let fixture: ComponentFixture<UserDetailSettingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
