import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserDetailInformationComponent } from './user-detail-information.component';

describe('UserDetailInformationComponent', () => {
  let component: UserDetailInformationComponent;
  let fixture: ComponentFixture<UserDetailInformationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
