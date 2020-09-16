import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVersionListComponent } from './admin-version-list.component';

describe('AdminVersionListComponent', () => {
  let component: AdminVersionListComponent;
  let fixture: ComponentFixture<AdminVersionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVersionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVersionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
