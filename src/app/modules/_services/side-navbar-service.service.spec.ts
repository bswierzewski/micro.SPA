import { TestBed } from '@angular/core/testing';

import { SideNavbarServiceService } from './side-navbar-service.service';

describe('SideNavbarServiceService', () => {
  let service: SideNavbarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideNavbarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
