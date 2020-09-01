import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponentListComponent } from './admin-component-list.component';

describe('AdminComponentListComponent', () => {
  let component: AdminComponentListComponent;
  let fixture: ComponentFixture<AdminComponentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
