import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KindListComponent } from './kind-list.component';

describe('KindListComponent', () => {
  let component: KindListComponent;
  let fixture: ComponentFixture<KindListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KindListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
