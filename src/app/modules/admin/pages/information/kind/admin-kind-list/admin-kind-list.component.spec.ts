import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKindListComponent } from './admin-kind-list.component';

describe('AdminKindListComponent', () => {
  let component: AdminKindListComponent;
  let fixture: ComponentFixture<AdminKindListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKindListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKindListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
