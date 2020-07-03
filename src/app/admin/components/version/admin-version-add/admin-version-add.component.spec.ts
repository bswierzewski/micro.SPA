import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVersionAddComponent } from './admin-version-add.component';

describe('AdminVersionAddComponent', () => {
  let component: AdminVersionAddComponent;
  let fixture: ComponentFixture<AdminVersionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVersionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVersionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
