import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVersionDetailComponent } from './admin-version-detail.component';

describe('AdminVersionDetailComponent', () => {
  let component: AdminVersionDetailComponent;
  let fixture: ComponentFixture<AdminVersionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVersionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVersionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
