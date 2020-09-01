import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKindCreateComponent } from './admin-kind-create.component';

describe('AdminKindCreateComponent', () => {
  let component: AdminKindCreateComponent;
  let fixture: ComponentFixture<AdminKindCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKindCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKindCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
