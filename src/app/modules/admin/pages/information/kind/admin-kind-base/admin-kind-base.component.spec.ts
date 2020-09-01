import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKindBaseComponent } from './admin-kind-base.component';

describe('AdminKindBaseComponent', () => {
  let component: AdminKindBaseComponent;
  let fixture: ComponentFixture<AdminKindBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKindBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKindBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
