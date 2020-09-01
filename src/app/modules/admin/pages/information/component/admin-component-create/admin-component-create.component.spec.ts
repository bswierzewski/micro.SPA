import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponentCreateComponent } from './admin-component-create.component';

describe('AdminComponentCreateComponent', () => {
  let component: AdminComponentCreateComponent;
  let fixture: ComponentFixture<AdminComponentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
