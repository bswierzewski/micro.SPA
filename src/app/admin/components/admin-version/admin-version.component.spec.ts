import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVersionComponent } from './admin-version.component';

describe('AdminVersionComponent', () => {
  let component: AdminVersionComponent;
  let fixture: ComponentFixture<AdminVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
