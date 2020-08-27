import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVersionCreateComponent } from './admin-version-create.component';

describe('AdminVersionCreateComponent', () => {
  let component: AdminVersionCreateComponent;
  let fixture: ComponentFixture<AdminVersionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVersionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVersionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
