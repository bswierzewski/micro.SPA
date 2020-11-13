import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KindDetailComponent } from './kind-detail.component';

describe('KindDetailComponent', () => {
  let component: KindDetailComponent;
  let fixture: ComponentFixture<KindDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KindDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
