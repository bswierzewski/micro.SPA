import { Injectable } from '@angular/core';
import { DeviceComponent } from 'src/app/modules/models/device-information/DeviceComponent';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceComponentInformationService {
  constructor() {}

  getDeviceComponents(): Observable<DeviceComponent[]> {
    return of([]);
  }

  addDeviceComponent(name: string): void {}

  removeDeviceComponent(name: string): void {}
}
