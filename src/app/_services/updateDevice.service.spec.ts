/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateDeviceService } from './updateDevice.service';

describe('Service: UpdateDevice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateDeviceService]
    });
  });

  it('should ...', inject([UpdateDeviceService], (service: UpdateDeviceService) => {
    expect(service).toBeTruthy();
  }));
});
