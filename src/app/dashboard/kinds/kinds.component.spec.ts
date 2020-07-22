import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KindsComponent } from './kinds.component';

describe('KindsComponent', () => {
  let component: KindsComponent;
  let fixture: ComponentFixture<KindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KindsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
