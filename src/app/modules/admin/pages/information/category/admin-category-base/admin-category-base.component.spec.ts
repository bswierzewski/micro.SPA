import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryBaseComponent } from './admin-category-base.component';

describe('AdminCategoryBaseComponent', () => {
  let component: AdminCategoryBaseComponent;
  let fixture: ComponentFixture<AdminCategoryBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCategoryBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
