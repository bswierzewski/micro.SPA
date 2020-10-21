import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsVersionDetailComponent } from './settings-version-detail.component';

describe('SettingsVersionDetailComponent', () => {
  let component: SettingsVersionDetailComponent;
  let fixture: ComponentFixture<SettingsVersionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsVersionDetailComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsVersionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
