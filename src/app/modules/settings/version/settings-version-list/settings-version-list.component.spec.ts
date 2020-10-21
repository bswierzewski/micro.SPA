import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsVersionListComponent } from './settings-version-list.component';

describe('SettingsVersionListComponent', () => {
  let component: SettingsVersionListComponent;
  let fixture: ComponentFixture<SettingsVersionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsVersionListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsVersionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
