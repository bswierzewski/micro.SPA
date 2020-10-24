import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailSettingsComponent } from './user-detail-settings.component';

describe('UserDetailSettingsComponent', () => {
  let component: UserDetailSettingsComponent;
  let fixture: ComponentFixture<UserDetailSettingsComponent>;

  beforeEach(async(() => {
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
